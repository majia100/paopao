require('NSURL,NSURLRequest,UIWebView,NSString,UIColor');
defineClass ("JPViewController : UIViewController",['webView'],{
             viewDidLoad: function()
             {
             self.super().viewDidLoad();
             self.view().setBackgroundColor(UIColor.whiteColor());
             console.log("666");
             var slf = self;//在block中不能使用self,进行处理.
             //这里也可以不适用属性,会相对简单一些.
             return UIWebView.alloc().performSelectorInOC('initWithFrame:', [self.view().bounds()],function(webView){
                                                          slf.setWebView(webView);
                                                          var url = NSURL.alloc().initWithString("http://www.baidu.com");
                                                          slf.webView().loadRequest(NSURLRequest.requestWithURL(url));
                                                          slf.webView().setDelegate(slf);
                                                          slf.webView().setScalesPageToFit(YES);
                                                          
                                                          slf.view().addSubview(slf.webView());
                                                          });
             },
             webViewDidFinishLoad: function(webView)
             {
             var title = webView.stringByEvaluatingJavaScriptFromString("document.title");
             self.navigationItem().setTitle(title);
             console.log(webView);
             console.log("加载完成");
             },
             
             },{
             
             });

(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("87ade0f8-7d3c-4ea1-b6b8-4a135744bd6b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '87ade0f8-7d3c-4ea1-b6b8-4a135744bd6b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"1faaa890-b065-4399-a99b-9520bf807f37":{"roots":{"references":[{"attributes":{"source":{"id":"58d2bc52-e4b4-468f-bc4b-168c42d47bb2","type":"ColumnDataSource"}},"id":"92ec99dd-9373-4dc6-84b2-a5c65fda8c63","type":"CDSView"},{"attributes":{"callback":null},"id":"a1653d35-c000-4a9b-8d4b-b0f4e42a4e5e","type":"DataRange1d"},{"attributes":{},"id":"70b13df6-c442-43fe-948a-a5282d288bc7","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a1148304-40e3-4e7c-829c-c1952406fa35","type":"PanTool"},{"id":"70b13df6-c442-43fe-948a-a5282d288bc7","type":"WheelZoomTool"},{"id":"06846a8c-b122-42f1-87b2-0eb53ca7df41","type":"BoxZoomTool"},{"id":"c81dbadc-99aa-4417-ae15-603c3c1678b3","type":"SaveTool"},{"id":"5005f10f-3611-4e39-8a25-cd3f1d77a1e8","type":"ResetTool"},{"id":"5a16cbc2-3f74-4e30-b59c-cd59401dd33a","type":"HelpTool"}]},"id":"f4aecc7a-81f6-4f82-8d23-84d0f8cbe159","type":"Toolbar"},{"attributes":{"overlay":{"id":"b358fdc1-02ca-47f6-b768-2a56baf7f40b","type":"BoxAnnotation"}},"id":"06846a8c-b122-42f1-87b2-0eb53ca7df41","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]}},"id":"58d2bc52-e4b4-468f-bc4b-168c42d47bb2","type":"ColumnDataSource"},{"attributes":{},"id":"c81dbadc-99aa-4417-ae15-603c3c1678b3","type":"SaveTool"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"9f656ffb-f08c-49bb-9ec3-843b6e3a8ca7","type":"OpenHead"},{"attributes":{},"id":"c8e88d86-652e-4917-9be0-7bd3a37ae757","type":"BasicTickFormatter"},{"attributes":{},"id":"5182e714-338a-4025-9b8a-557c2fb3a792","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647","subtype":"Figure","type":"Plot"},"ticker":{"id":"5182e714-338a-4025-9b8a-557c2fb3a792","type":"BasicTicker"}},"id":"db77cc22-f6ca-4b44-b893-cb67bfa51030","type":"Grid"},{"attributes":{"end":{"id":"4e88f902-f574-4d93-a594-8e8db83eac9c","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"0bff0485-9fdc-47b8-82c3-c06f3dbbde25","type":"Arrow"},{"attributes":{},"id":"5a16cbc2-3f74-4e30-b59c-cd59401dd33a","type":"HelpTool"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"4fc2de6a-2b6a-4834-8681-28717f959657","type":"NormalHead"},{"attributes":{"formatter":{"id":"c8e88d86-652e-4917-9be0-7bd3a37ae757","type":"BasicTickFormatter"},"plot":{"id":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647","subtype":"Figure","type":"Plot"},"ticker":{"id":"f24817a1-0d4f-42b2-9616-bc964fbbdc2e","type":"BasicTicker"}},"id":"75e2cbbe-6c9d-40e0-b0e8-cb4354d76a58","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"6a8b6e68-92e5-4138-ab84-0ffba515647c","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"61dc8672-f245-48f2-b129-4af049ece705","type":"Circle"},{"attributes":{"end":{"id":"4fc2de6a-2b6a-4834-8681-28717f959657","type":"NormalHead"},"plot":{"id":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"f96cd670-3d79-46ee-8cc6-a4f8555b1d26","type":"Arrow"},{"attributes":{"callback":null},"id":"42849d65-0e89-44df-9ae8-102330f64a49","type":"DataRange1d"},{"attributes":{"plot":null,"size":35},"id":"4e88f902-f574-4d93-a594-8e8db83eac9c","type":"VeeHead"},{"attributes":{"plot":{"id":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647","subtype":"Figure","type":"Plot"},"ticker":{"id":"f24817a1-0d4f-42b2-9616-bc964fbbdc2e","type":"BasicTicker"}},"id":"f481a01a-ae83-4a03-859c-d8fdb9cb94ba","type":"Grid"},{"attributes":{"formatter":{"id":"56bfa206-3dc4-4c1b-94f0-523ed697bba2","type":"BasicTickFormatter"},"plot":{"id":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647","subtype":"Figure","type":"Plot"},"ticker":{"id":"5182e714-338a-4025-9b8a-557c2fb3a792","type":"BasicTicker"}},"id":"2b7ffe4b-6322-4e2a-b07c-1e0a607ed496","type":"LinearAxis"},{"attributes":{},"id":"f24817a1-0d4f-42b2-9616-bc964fbbdc2e","type":"BasicTicker"},{"attributes":{"end":{"id":"9f656ffb-f08c-49bb-9ec3-843b6e3a8ca7","type":"OpenHead"},"plot":{"id":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"7cffad06-bf22-451b-8699-5a473c49123d","type":"Arrow"},{"attributes":{},"id":"fe038948-5057-401e-896d-b081e1f72efb","type":"LinearScale"},{"attributes":{},"id":"a1148304-40e3-4e7c-829c-c1952406fa35","type":"PanTool"},{"attributes":{},"id":"56bfa206-3dc4-4c1b-94f0-523ed697bba2","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"75e2cbbe-6c9d-40e0-b0e8-cb4354d76a58","type":"LinearAxis"}],"left":[{"id":"2b7ffe4b-6322-4e2a-b07c-1e0a607ed496","type":"LinearAxis"}],"renderers":[{"id":"75e2cbbe-6c9d-40e0-b0e8-cb4354d76a58","type":"LinearAxis"},{"id":"f481a01a-ae83-4a03-859c-d8fdb9cb94ba","type":"Grid"},{"id":"2b7ffe4b-6322-4e2a-b07c-1e0a607ed496","type":"LinearAxis"},{"id":"db77cc22-f6ca-4b44-b893-cb67bfa51030","type":"Grid"},{"id":"b358fdc1-02ca-47f6-b768-2a56baf7f40b","type":"BoxAnnotation"},{"id":"0d26e901-8e72-4aa9-b9e5-1f1a78821bd9","type":"GlyphRenderer"},{"id":"7cffad06-bf22-451b-8699-5a473c49123d","type":"Arrow"},{"id":"f96cd670-3d79-46ee-8cc6-a4f8555b1d26","type":"Arrow"},{"id":"0bff0485-9fdc-47b8-82c3-c06f3dbbde25","type":"Arrow"}],"title":{"id":"6a8b6e68-92e5-4138-ab84-0ffba515647c","type":"Title"},"toolbar":{"id":"f4aecc7a-81f6-4f82-8d23-84d0f8cbe159","type":"Toolbar"},"x_range":{"id":"a1653d35-c000-4a9b-8d4b-b0f4e42a4e5e","type":"DataRange1d"},"x_scale":{"id":"ba2eda51-54a1-4efc-8213-4ed3b004859b","type":"LinearScale"},"y_range":{"id":"42849d65-0e89-44df-9ae8-102330f64a49","type":"DataRange1d"},"y_scale":{"id":"fe038948-5057-401e-896d-b081e1f72efb","type":"LinearScale"}},"id":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"60b7cfc1-cc3c-49f3-b52d-b869b263c386","type":"Circle"},{"attributes":{},"id":"ba2eda51-54a1-4efc-8213-4ed3b004859b","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b358fdc1-02ca-47f6-b768-2a56baf7f40b","type":"BoxAnnotation"},{"attributes":{},"id":"5005f10f-3611-4e39-8a25-cd3f1d77a1e8","type":"ResetTool"},{"attributes":{"data_source":{"id":"58d2bc52-e4b4-468f-bc4b-168c42d47bb2","type":"ColumnDataSource"},"glyph":{"id":"60b7cfc1-cc3c-49f3-b52d-b869b263c386","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61dc8672-f245-48f2-b129-4af049ece705","type":"Circle"},"selection_glyph":null,"view":{"id":"92ec99dd-9373-4dc6-84b2-a5c65fda8c63","type":"CDSView"}},"id":"0d26e901-8e72-4aa9-b9e5-1f1a78821bd9","type":"GlyphRenderer"}],"root_ids":["3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"1faaa890-b065-4399-a99b-9520bf807f37","elementid":"87ade0f8-7d3c-4ea1-b6b8-4a135744bd6b","modelid":"3f25a6f9-a3c3-4ac8-8fc8-6972d48eb647"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

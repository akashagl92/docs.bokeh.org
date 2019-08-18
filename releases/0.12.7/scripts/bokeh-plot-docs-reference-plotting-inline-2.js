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
      };var element = document.getElementById("a95390bb-5c64-4414-97e7-e0d151a0d038");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a95390bb-5c64-4414-97e7-e0d151a0d038' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"b6647011-99d9-4460-8be7-ad739c6140c6":{"roots":{"references":[{"attributes":{"data_source":{"id":"d3fe4dfb-2591-4655-b840-abe7a15163c7","type":"ColumnDataSource"},"glyph":{"id":"74366c72-6834-48b6-b050-7b1f01d483b9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f2b56d53-b7d8-4f5e-a299-0cd1c479f317","type":"Circle"},"selection_glyph":null,"view":{"id":"220b193e-c01c-463e-be28-4c262d73120a","type":"CDSView"}},"id":"4805dbd5-4a0b-4a76-8f11-2142ea4c6ff0","type":"GlyphRenderer"},{"attributes":{},"id":"1e09f1c4-dc45-431e-abe8-b2be9e5e8f3a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"c05d2313-654d-49dc-9a3c-dc6615e1d3b6","type":"LinearAxis"}],"left":[{"id":"7c310172-5d0e-4a53-8d6f-cc21eee1c2d8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c05d2313-654d-49dc-9a3c-dc6615e1d3b6","type":"LinearAxis"},{"id":"02e91035-c218-421c-b55c-da22f894cadb","type":"Grid"},{"id":"7c310172-5d0e-4a53-8d6f-cc21eee1c2d8","type":"LinearAxis"},{"id":"67f8a7b6-b5ae-4ce9-b30b-4eaadfaa5cdf","type":"Grid"},{"id":"70e17f76-0036-4b26-8525-f47f6dd93f7f","type":"BoxAnnotation"},{"id":"4805dbd5-4a0b-4a76-8f11-2142ea4c6ff0","type":"GlyphRenderer"}],"title":{"id":"c48a6111-ca1f-4167-8529-8da19c81b4da","type":"Title"},"toolbar":{"id":"2d6b618b-d70c-485d-9cfa-8116ea18dba7","type":"Toolbar"},"x_range":{"id":"1ade93a9-397b-4a32-a101-16645d44f62b","type":"DataRange1d"},"x_scale":{"id":"9e325e88-7547-4192-9556-5af7e7bf5071","type":"LinearScale"},"y_range":{"id":"c46e4542-0cef-4688-b3a1-3eb86318227b","type":"DataRange1d"},"y_scale":{"id":"a99bd06b-f6f9-447a-a183-f716077a29b7","type":"LinearScale"}},"id":"b81080f5-dfd4-4c5c-a448-8a6089858946","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f1de959d-41b0-466c-ba09-3ceb7045bcdb","type":"PanTool"},{"id":"aa839622-90b0-49ab-943c-a67f89d2a116","type":"WheelZoomTool"},{"id":"c43157e7-66ac-4435-b174-12ebd9fa3975","type":"BoxZoomTool"},{"id":"efb330b9-7c25-4432-b6f3-18d3b089cca7","type":"SaveTool"},{"id":"e865f7c5-e3a2-4b9e-b609-7ff4f393086d","type":"ResetTool"},{"id":"9e4ee04d-0c27-44f4-8c66-60f2b5bd0ae5","type":"HelpTool"}]},"id":"2d6b618b-d70c-485d-9cfa-8116ea18dba7","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"c48a6111-ca1f-4167-8529-8da19c81b4da","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2b56d53-b7d8-4f5e-a299-0cd1c479f317","type":"Circle"},{"attributes":{},"id":"9e4ee04d-0c27-44f4-8c66-60f2b5bd0ae5","type":"HelpTool"},{"attributes":{"plot":{"id":"b81080f5-dfd4-4c5c-a448-8a6089858946","subtype":"Figure","type":"Plot"},"ticker":{"id":"94826cc4-e30a-4f52-952d-d91e7894047b","type":"BasicTicker"}},"id":"02e91035-c218-421c-b55c-da22f894cadb","type":"Grid"},{"attributes":{"callback":null},"id":"1ade93a9-397b-4a32-a101-16645d44f62b","type":"DataRange1d"},{"attributes":{},"id":"e865f7c5-e3a2-4b9e-b609-7ff4f393086d","type":"ResetTool"},{"attributes":{},"id":"1086b2ee-0115-48dd-a75c-a4541a08585d","type":"BasicTickFormatter"},{"attributes":{},"id":"efb330b9-7c25-4432-b6f3-18d3b089cca7","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"74366c72-6834-48b6-b050-7b1f01d483b9","type":"Circle"},{"attributes":{"overlay":{"id":"70e17f76-0036-4b26-8525-f47f6dd93f7f","type":"BoxAnnotation"}},"id":"c43157e7-66ac-4435-b174-12ebd9fa3975","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"1e09f1c4-dc45-431e-abe8-b2be9e5e8f3a","type":"BasicTickFormatter"},"plot":{"id":"b81080f5-dfd4-4c5c-a448-8a6089858946","subtype":"Figure","type":"Plot"},"ticker":{"id":"28a8678a-24db-47b9-a157-6a086a456177","type":"BasicTicker"}},"id":"7c310172-5d0e-4a53-8d6f-cc21eee1c2d8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c46e4542-0cef-4688-b3a1-3eb86318227b","type":"DataRange1d"},{"attributes":{},"id":"aa839622-90b0-49ab-943c-a67f89d2a116","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"1086b2ee-0115-48dd-a75c-a4541a08585d","type":"BasicTickFormatter"},"plot":{"id":"b81080f5-dfd4-4c5c-a448-8a6089858946","subtype":"Figure","type":"Plot"},"ticker":{"id":"94826cc4-e30a-4f52-952d-d91e7894047b","type":"BasicTicker"}},"id":"c05d2313-654d-49dc-9a3c-dc6615e1d3b6","type":"LinearAxis"},{"attributes":{},"id":"9e325e88-7547-4192-9556-5af7e7bf5071","type":"LinearScale"},{"attributes":{"source":{"id":"d3fe4dfb-2591-4655-b840-abe7a15163c7","type":"ColumnDataSource"}},"id":"220b193e-c01c-463e-be28-4c262d73120a","type":"CDSView"},{"attributes":{},"id":"94826cc4-e30a-4f52-952d-d91e7894047b","type":"BasicTicker"},{"attributes":{},"id":"a99bd06b-f6f9-447a-a183-f716077a29b7","type":"LinearScale"},{"attributes":{},"id":"f1de959d-41b0-466c-ba09-3ceb7045bcdb","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"70e17f76-0036-4b26-8525-f47f6dd93f7f","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d3fe4dfb-2591-4655-b840-abe7a15163c7","type":"ColumnDataSource"},{"attributes":{},"id":"28a8678a-24db-47b9-a157-6a086a456177","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b81080f5-dfd4-4c5c-a448-8a6089858946","subtype":"Figure","type":"Plot"},"ticker":{"id":"28a8678a-24db-47b9-a157-6a086a456177","type":"BasicTicker"}},"id":"67f8a7b6-b5ae-4ce9-b30b-4eaadfaa5cdf","type":"Grid"}],"root_ids":["b81080f5-dfd4-4c5c-a448-8a6089858946"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b6647011-99d9-4460-8be7-ad739c6140c6","elementid":"a95390bb-5c64-4414-97e7-e0d151a0d038","modelid":"b81080f5-dfd4-4c5c-a448-8a6089858946"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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

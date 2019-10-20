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
      };var element = document.getElementById("f61e0de6-07b9-45d3-a17d-e87a41ca9bc5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f61e0de6-07b9-45d3-a17d-e87a41ca9bc5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"42138ea5-f5ec-4448-b026-8fccbd6d9f7d":{"roots":{"references":[{"attributes":{},"id":"3661aa8a-a7b9-4693-b20a-01596c247fe3","type":"SaveTool"},{"attributes":{"formatter":{"id":"b5d3d3fd-a270-4df6-b79b-d7cbbd8ddb71","type":"BasicTickFormatter"},"plot":{"id":"46b4050b-ce27-46cf-a3e3-d0bd9cb965b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b423ae3-e43f-4cb1-bd50-6cdda00eb441","type":"BasicTicker"}},"id":"6e15e78a-d4f6-4e88-9e5c-4951cd1cfe7f","type":"LinearAxis"},{"attributes":{},"id":"b44d147b-a1a3-4520-88bc-057cbd36a664","type":"ResetTool"},{"attributes":{},"id":"e7e36ea3-4e9a-4e4c-ab9f-53fe16651a82","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"46b4050b-ce27-46cf-a3e3-d0bd9cb965b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b423ae3-e43f-4cb1-bd50-6cdda00eb441","type":"BasicTicker"}},"id":"7b52b1b3-9cd6-4c09-81b2-3bf92f20ac5f","type":"Grid"},{"attributes":{},"id":"b5d3d3fd-a270-4df6-b79b-d7cbbd8ddb71","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4e7e1b83-11e1-4ee5-9043-09313cd96289","type":"PanTool"},{"id":"0118ed03-8a8c-4529-b972-10600a4ad3fd","type":"WheelZoomTool"},{"id":"c8354874-7390-4a6f-abd0-b00003f0862f","type":"BoxZoomTool"},{"id":"3661aa8a-a7b9-4693-b20a-01596c247fe3","type":"SaveTool"},{"id":"b44d147b-a1a3-4520-88bc-057cbd36a664","type":"ResetTool"},{"id":"f6533676-7835-4f7f-a806-6b4c6930db97","type":"HelpTool"}]},"id":"efcf393e-e9b8-4bd5-8d5a-5901361bca39","type":"Toolbar"},{"attributes":{"overlay":{"id":"db525bc6-ec54-44be-b0ee-e1a004302e93","type":"BoxAnnotation"}},"id":"c8354874-7390-4a6f-abd0-b00003f0862f","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"db525bc6-ec54-44be-b0ee-e1a004302e93","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"121d73c8-c163-417f-812b-59779a555f13","type":"ColumnDataSource"},"glyph":{"id":"3be3b515-c55b-4166-b948-deb1e84c8cf3","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e00f2346-7630-41fa-8037-1bd1bfbf334e","type":"Ellipse"},"selection_glyph":null,"view":{"id":"352fd3e3-8df2-4c10-a1cb-7fc3a4f9cf98","type":"CDSView"}},"id":"ecb63e24-0d74-419d-a897-891c1d877f14","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"bc5e5ac1-f4be-49b9-9926-c601369abaa7","type":"DataRange1d"},{"attributes":{},"id":"1eec2c04-52ae-43a3-a827-31fd6fd907a1","type":"BasicTicker"},{"attributes":{},"id":"9b423ae3-e43f-4cb1-bd50-6cdda00eb441","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e7e36ea3-4e9a-4e4c-ab9f-53fe16651a82","type":"BasicTickFormatter"},"plot":{"id":"46b4050b-ce27-46cf-a3e3-d0bd9cb965b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1eec2c04-52ae-43a3-a827-31fd6fd907a1","type":"BasicTicker"}},"id":"a48935e8-d8d8-41a1-9107-4aa01aa60de2","type":"LinearAxis"},{"attributes":{},"id":"f6533676-7835-4f7f-a806-6b4c6930db97","type":"HelpTool"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"3be3b515-c55b-4166-b948-deb1e84c8cf3","type":"Ellipse"},{"attributes":{"source":{"id":"121d73c8-c163-417f-812b-59779a555f13","type":"ColumnDataSource"}},"id":"352fd3e3-8df2-4c10-a1cb-7fc3a4f9cf98","type":"CDSView"},{"attributes":{"callback":null},"id":"9b854fac-29d8-4037-85c4-c1c55bd81021","type":"DataRange1d"},{"attributes":{},"id":"4e7e1b83-11e1-4ee5-9043-09313cd96289","type":"PanTool"},{"attributes":{},"id":"0118ed03-8a8c-4529-b972-10600a4ad3fd","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"e00f2346-7630-41fa-8037-1bd1bfbf334e","type":"Ellipse"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"121d73c8-c163-417f-812b-59779a555f13","type":"ColumnDataSource"},{"attributes":{},"id":"fba03fc8-ca53-4418-a285-d72da659a1e0","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"4dfea800-53ff-4f36-9480-91fbc7e22a87","type":"Title"},{"attributes":{"plot":{"id":"46b4050b-ce27-46cf-a3e3-d0bd9cb965b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1eec2c04-52ae-43a3-a827-31fd6fd907a1","type":"BasicTicker"}},"id":"50e02871-1ab5-450b-a05d-de850259b629","type":"Grid"},{"attributes":{"below":[{"id":"a48935e8-d8d8-41a1-9107-4aa01aa60de2","type":"LinearAxis"}],"left":[{"id":"6e15e78a-d4f6-4e88-9e5c-4951cd1cfe7f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a48935e8-d8d8-41a1-9107-4aa01aa60de2","type":"LinearAxis"},{"id":"50e02871-1ab5-450b-a05d-de850259b629","type":"Grid"},{"id":"6e15e78a-d4f6-4e88-9e5c-4951cd1cfe7f","type":"LinearAxis"},{"id":"7b52b1b3-9cd6-4c09-81b2-3bf92f20ac5f","type":"Grid"},{"id":"db525bc6-ec54-44be-b0ee-e1a004302e93","type":"BoxAnnotation"},{"id":"ecb63e24-0d74-419d-a897-891c1d877f14","type":"GlyphRenderer"}],"title":{"id":"4dfea800-53ff-4f36-9480-91fbc7e22a87","type":"Title"},"toolbar":{"id":"efcf393e-e9b8-4bd5-8d5a-5901361bca39","type":"Toolbar"},"x_range":{"id":"9b854fac-29d8-4037-85c4-c1c55bd81021","type":"DataRange1d"},"x_scale":{"id":"fba03fc8-ca53-4418-a285-d72da659a1e0","type":"LinearScale"},"y_range":{"id":"bc5e5ac1-f4be-49b9-9926-c601369abaa7","type":"DataRange1d"},"y_scale":{"id":"e671a22d-5970-4722-90b4-3a1a70ca261a","type":"LinearScale"}},"id":"46b4050b-ce27-46cf-a3e3-d0bd9cb965b4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e671a22d-5970-4722-90b4-3a1a70ca261a","type":"LinearScale"}],"root_ids":["46b4050b-ce27-46cf-a3e3-d0bd9cb965b4"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"42138ea5-f5ec-4448-b026-8fccbd6d9f7d","elementid":"f61e0de6-07b9-45d3-a17d-e87a41ca9bc5","modelid":"46b4050b-ce27-46cf-a3e3-d0bd9cb965b4"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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

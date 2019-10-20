(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("24b91a53-b62d-4f76-b670-3a11b79357a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '24b91a53-b62d-4f76-b670-3a11b79357a0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"5b047f35-1e19-461d-9347-4cd72ab77af2":{"roots":{"references":[{"attributes":{},"id":"e2c60a55-a931-4ca7-bc60-25620023454d","type":"LinearScale"},{"attributes":{"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"}},"id":"6bc1b3cb-8617-4a03-bf72-f34879643b17","type":"WheelZoomTool"},{"attributes":{},"id":"5b7dcf00-07e4-44ec-a373-98974944dc27","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"a91bdc0f-3bdb-4d34-ba80-14b719040e53","type":"Title"},{"attributes":{},"id":"54f7929e-d9ec-4134-839b-dfcf778e8a89","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"42508fd1-b184-4b61-9e4a-e046953465ba","type":"ColumnDataSource"},{"attributes":{},"id":"bd3e0ca4-dd6f-4132-8d33-81dab6f155c2","type":"LinearScale"},{"attributes":{"callback":null,"end":20},"id":"6682e15c-f079-4d1d-9c05-fa782e6d68cb","type":"Range1d"},{"attributes":{"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"}},"id":"ab176ad8-1498-42df-9b83-0a831062409a","type":"PanTool"},{"attributes":{"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b7dcf00-07e4-44ec-a373-98974944dc27","type":"BasicTicker"}},"id":"b9555652-449d-424c-a648-9edd076642d7","type":"Grid"},{"attributes":{"below":[{"id":"46ba0eaf-b6a1-4dbf-814d-06436dd99bbb","type":"LinearAxis"}],"left":[{"id":"e6ae2259-a974-4d8b-800b-88cdb3c2a41d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"46ba0eaf-b6a1-4dbf-814d-06436dd99bbb","type":"LinearAxis"},{"id":"b9555652-449d-424c-a648-9edd076642d7","type":"Grid"},{"id":"e6ae2259-a974-4d8b-800b-88cdb3c2a41d","type":"LinearAxis"},{"id":"2cc95541-b750-4afb-aee8-6ffa6bd1a139","type":"Grid"},{"id":"e2c3663e-0bc0-4d02-99f9-56e20f242e10","type":"BoxAnnotation"},{"id":"056e705a-b9e7-4095-a5d7-86a9598107cb","type":"GlyphRenderer"}],"title":{"id":"a91bdc0f-3bdb-4d34-ba80-14b719040e53","type":"Title"},"tool_events":{"id":"a0691b3c-1a0b-4539-aac4-3d46d68c8dd2","type":"ToolEvents"},"toolbar":{"id":"6497282a-9c72-4217-a73b-3e843c17c7e6","type":"Toolbar"},"x_range":{"id":"6682e15c-f079-4d1d-9c05-fa782e6d68cb","type":"Range1d"},"x_scale":{"id":"bd3e0ca4-dd6f-4132-8d33-81dab6f155c2","type":"LinearScale"},"y_range":{"id":"203dc837-00e8-48f3-9697-15090df98c1a","type":"Range1d"},"y_scale":{"id":"e2c60a55-a931-4ca7-bc60-25620023454d","type":"LinearScale"}},"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5fc8f880-d298-4c04-8ea0-795985bf972b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5fc8f880-d298-4c04-8ea0-795985bf972b","type":"BasicTickFormatter"},"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"},"ticker":{"id":"54f7929e-d9ec-4134-839b-dfcf778e8a89","type":"BasicTicker"}},"id":"e6ae2259-a974-4d8b-800b-88cdb3c2a41d","type":"LinearAxis"},{"attributes":{"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"}},"id":"b88e6011-6908-45f0-9f7e-45a7b77fe53f","type":"HelpTool"},{"attributes":{"overlay":{"id":"e2c3663e-0bc0-4d02-99f9-56e20f242e10","type":"BoxAnnotation"},"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"}},"id":"c8865913-58ac-4cee-af98-f11d4e58914a","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d6098d8-4f05-4052-8f2d-4912486c77f1","type":"Circle"},{"attributes":{"data_source":{"id":"42508fd1-b184-4b61-9e4a-e046953465ba","type":"ColumnDataSource"},"glyph":{"id":"1d6098d8-4f05-4052-8f2d-4912486c77f1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"241744d5-5233-47d6-961d-427919e4fd8d","type":"Circle"},"selection_glyph":null},"id":"056e705a-b9e7-4095-a5d7-86a9598107cb","type":"GlyphRenderer"},{"attributes":{},"id":"a0691b3c-1a0b-4539-aac4-3d46d68c8dd2","type":"ToolEvents"},{"attributes":{"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"}},"id":"3e2872e1-6622-423c-8733-07f736a848b9","type":"SaveTool"},{"attributes":{"callback":null,"end":15},"id":"203dc837-00e8-48f3-9697-15090df98c1a","type":"Range1d"},{"attributes":{},"id":"a4429217-31ad-45c2-b763-afe651081c2a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"},"ticker":{"id":"54f7929e-d9ec-4134-839b-dfcf778e8a89","type":"BasicTicker"}},"id":"2cc95541-b750-4afb-aee8-6ffa6bd1a139","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"241744d5-5233-47d6-961d-427919e4fd8d","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ab176ad8-1498-42df-9b83-0a831062409a","type":"PanTool"},{"id":"6bc1b3cb-8617-4a03-bf72-f34879643b17","type":"WheelZoomTool"},{"id":"c8865913-58ac-4cee-af98-f11d4e58914a","type":"BoxZoomTool"},{"id":"3e2872e1-6622-423c-8733-07f736a848b9","type":"SaveTool"},{"id":"25345366-db5c-4597-99a3-83daf6943380","type":"ResetTool"},{"id":"b88e6011-6908-45f0-9f7e-45a7b77fe53f","type":"HelpTool"}]},"id":"6497282a-9c72-4217-a73b-3e843c17c7e6","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e2c3663e-0bc0-4d02-99f9-56e20f242e10","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"a4429217-31ad-45c2-b763-afe651081c2a","type":"BasicTickFormatter"},"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b7dcf00-07e4-44ec-a373-98974944dc27","type":"BasicTicker"}},"id":"46ba0eaf-b6a1-4dbf-814d-06436dd99bbb","type":"LinearAxis"},{"attributes":{"plot":{"id":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c","subtype":"Figure","type":"Plot"}},"id":"25345366-db5c-4597-99a3-83daf6943380","type":"ResetTool"}],"root_ids":["d1a26a2d-31f6-4e6d-8109-3d0b58f8965c"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"5b047f35-1e19-461d-9347-4cd72ab77af2","elementid":"24b91a53-b62d-4f76-b670-3a11b79357a0","modelid":"d1a26a2d-31f6-4e6d-8109-3d0b58f8965c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

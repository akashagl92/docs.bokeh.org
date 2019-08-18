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
      };var element = document.getElementById("82b99f8b-8208-48b7-8c64-f53246bcd8be");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '82b99f8b-8208-48b7-8c64-f53246bcd8be' but no matching script tag was found. ")
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
                var docs_json = {"4807ab12-e859-4385-8115-b0e1b7edfe2f":{"roots":{"references":[{"attributes":{},"id":"f5e81b6e-c59c-420f-9f53-126eaf66e238","type":"ToolEvents"},{"attributes":{"data_source":{"id":"0e3c7ba9-df02-49ef-94bc-05cbfee9c400","type":"ColumnDataSource"},"glyph":{"id":"617bbbc6-b4ae-48ad-9d9b-7bc719b63f2e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79d0c7e3-b09c-4553-ae31-3f6614472db6","type":"Circle"},"selection_glyph":{"id":"87d0d697-fadc-43d5-9765-0cadc1007bcd","type":"Circle"}},"id":"26ec40db-d237-4230-b4fb-e7a83c112af0","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e67c067c-42ec-4f53-8120-b32171d678d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a011295a-20d1-4f4e-923f-9796b4a6760c","type":"BasicTicker"}},"id":"19ea20c6-cf70-415e-a931-b71a197dedcf","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0e3c7ba9-df02-49ef-94bc-05cbfee9c400","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"e67c067c-42ec-4f53-8120-b32171d678d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"33471f87-0c6b-43ae-b6be-daf004bc7d93","type":"BasicTicker"}},"id":"cf3ca668-00e6-434c-82f6-4c95e5adaa7a","type":"Grid"},{"attributes":{"below":[{"id":"d57d0123-5719-4bb8-a834-ad8fe1d9395f","type":"LinearAxis"}],"left":[{"id":"f7b21fb2-a338-4eab-ad99-8f8233a24186","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d57d0123-5719-4bb8-a834-ad8fe1d9395f","type":"LinearAxis"},{"id":"19ea20c6-cf70-415e-a931-b71a197dedcf","type":"Grid"},{"id":"f7b21fb2-a338-4eab-ad99-8f8233a24186","type":"LinearAxis"},{"id":"cf3ca668-00e6-434c-82f6-4c95e5adaa7a","type":"Grid"},{"id":"26ec40db-d237-4230-b4fb-e7a83c112af0","type":"GlyphRenderer"}],"title":{"id":"5cec5c2a-5ca9-4a51-aa73-9db2f62d1487","type":"Title"},"tool_events":{"id":"f5e81b6e-c59c-420f-9f53-126eaf66e238","type":"ToolEvents"},"toolbar":{"id":"185938e4-2876-4cc1-9c20-60505132363e","type":"Toolbar"},"x_range":{"id":"16a2b5b5-8c90-4b7b-b13a-9876481fa15f","type":"DataRange1d"},"x_scale":{"id":"22e7474d-ff36-4a57-a217-14281f119abf","type":"LinearScale"},"y_range":{"id":"9d27d83c-5c3f-4433-8553-c6063f16d28d","type":"DataRange1d"},"y_scale":{"id":"cb760205-4166-4270-97b6-9068f0deaf8b","type":"LinearScale"}},"id":"e67c067c-42ec-4f53-8120-b32171d678d2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cb760205-4166-4270-97b6-9068f0deaf8b","type":"LinearScale"},{"attributes":{},"id":"a6315a03-22c3-45f5-ab2d-ec7b089fadbe","type":"BasicTickFormatter"},{"attributes":{},"id":"b1014424-c02b-416f-88da-0c5bf3b1cc2d","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"250aa683-a0f4-4ec0-a932-633d7059fbdf","type":"TapTool"}]},"id":"185938e4-2876-4cc1-9c20-60505132363e","type":"Toolbar"},{"attributes":{"formatter":{"id":"a6315a03-22c3-45f5-ab2d-ec7b089fadbe","type":"BasicTickFormatter"},"plot":{"id":"e67c067c-42ec-4f53-8120-b32171d678d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a011295a-20d1-4f4e-923f-9796b4a6760c","type":"BasicTicker"}},"id":"d57d0123-5719-4bb8-a834-ad8fe1d9395f","type":"LinearAxis"},{"attributes":{},"id":"a011295a-20d1-4f4e-923f-9796b4a6760c","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"87d0d697-fadc-43d5-9765-0cadc1007bcd","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"79d0c7e3-b09c-4553-ae31-3f6614472db6","type":"Circle"},{"attributes":{},"id":"22e7474d-ff36-4a57-a217-14281f119abf","type":"LinearScale"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"5cec5c2a-5ca9-4a51-aa73-9db2f62d1487","type":"Title"},{"attributes":{"callback":null},"id":"16a2b5b5-8c90-4b7b-b13a-9876481fa15f","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"617bbbc6-b4ae-48ad-9d9b-7bc719b63f2e","type":"Circle"},{"attributes":{"formatter":{"id":"b1014424-c02b-416f-88da-0c5bf3b1cc2d","type":"BasicTickFormatter"},"plot":{"id":"e67c067c-42ec-4f53-8120-b32171d678d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"33471f87-0c6b-43ae-b6be-daf004bc7d93","type":"BasicTicker"}},"id":"f7b21fb2-a338-4eab-ad99-8f8233a24186","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9d27d83c-5c3f-4433-8553-c6063f16d28d","type":"DataRange1d"},{"attributes":{},"id":"33471f87-0c6b-43ae-b6be-daf004bc7d93","type":"BasicTicker"},{"attributes":{"callback":null,"plot":{"id":"e67c067c-42ec-4f53-8120-b32171d678d2","subtype":"Figure","type":"Plot"}},"id":"250aa683-a0f4-4ec0-a932-633d7059fbdf","type":"TapTool"}],"root_ids":["e67c067c-42ec-4f53-8120-b32171d678d2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"4807ab12-e859-4385-8115-b0e1b7edfe2f","elementid":"82b99f8b-8208-48b7-8c64-f53246bcd8be","modelid":"e67c067c-42ec-4f53-8120-b32171d678d2"}];
                
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

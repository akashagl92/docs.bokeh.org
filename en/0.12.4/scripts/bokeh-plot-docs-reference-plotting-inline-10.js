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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("d9ddc068-66a9-4f7a-b897-f76e1fd96866");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd9ddc068-66a9-4f7a-b897-f76e1fd96866' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"bac28d8c-5c56-48bb-8606-8bf1be4bfe76":{"roots":{"references":[{"attributes":{"formatter":{"id":"e634a46d-35d6-4502-a1f8-44780adb9e73","type":"BasicTickFormatter"},"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2788fead-54a0-4e8b-ab8e-c2413a863678","type":"BasicTicker"}},"id":"5f8bf97b-0f93-4850-a1f2-4e15553d824c","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4c8d6f2c-9071-4b61-b29a-381506560ef1","type":"ColumnDataSource"},"glyph":{"id":"48650e38-8da8-4b9f-8509-5a39005952c9","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":{"id":"2c804bab-6dff-443c-b4fc-c68187ee55b2","type":"InvertedTriangle"},"selection_glyph":null},"id":"27398d28-2fe2-41a3-8572-adda1288ecf5","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"a4c35d61-3988-4bc3-a8e1-4c0651bfe4d0","type":"Title"},{"attributes":{"below":[{"id":"f67a68d7-a88e-4c74-a776-2c5bfc00833d","type":"LinearAxis"}],"left":[{"id":"5f8bf97b-0f93-4850-a1f2-4e15553d824c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f67a68d7-a88e-4c74-a776-2c5bfc00833d","type":"LinearAxis"},{"id":"c7493acc-9352-44e3-981c-f516e122888f","type":"Grid"},{"id":"5f8bf97b-0f93-4850-a1f2-4e15553d824c","type":"LinearAxis"},{"id":"e0cc51f5-dff9-4df2-9651-b5a3b2d4f38d","type":"Grid"},{"id":"19686836-7cb1-4861-b47c-70cfd5a655a4","type":"BoxAnnotation"},{"id":"27398d28-2fe2-41a3-8572-adda1288ecf5","type":"GlyphRenderer"}],"title":{"id":"a4c35d61-3988-4bc3-a8e1-4c0651bfe4d0","type":"Title"},"tool_events":{"id":"a7fb442f-f7dd-4eaf-9a0d-d13830556833","type":"ToolEvents"},"toolbar":{"id":"0cf3459c-2638-45a7-bc18-ad6dbd67d6a9","type":"Toolbar"},"x_range":{"id":"a47fa9f3-8eb8-419d-82eb-491a88afc136","type":"DataRange1d"},"y_range":{"id":"a266c2bd-055f-4a51-b216-db04740f4ca3","type":"DataRange1d"}},"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a7fb442f-f7dd-4eaf-9a0d-d13830556833","type":"ToolEvents"},{"attributes":{"callback":null},"id":"a266c2bd-055f-4a51-b216-db04740f4ca3","type":"DataRange1d"},{"attributes":{},"id":"ca4c9837-129f-4222-a005-ccebb3ccd5de","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"19686836-7cb1-4861-b47c-70cfd5a655a4","type":"BoxAnnotation"},"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"}},"id":"830ce763-8349-4a4e-86d5-a1457709594e","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"}},"id":"da640e9f-27ae-414f-98b7-a81c7a5bb339","type":"HelpTool"},{"attributes":{"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"}},"id":"c015da1c-48f6-4f54-ad12-1b6d2cb5b2a5","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2788fead-54a0-4e8b-ab8e-c2413a863678","type":"BasicTicker"}},"id":"e0cc51f5-dff9-4df2-9651-b5a3b2d4f38d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c804bab-6dff-443c-b4fc-c68187ee55b2","type":"InvertedTriangle"},{"attributes":{},"id":"2788fead-54a0-4e8b-ab8e-c2413a863678","type":"BasicTicker"},{"attributes":{},"id":"e634a46d-35d6-4502-a1f8-44780adb9e73","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4c8d6f2c-9071-4b61-b29a-381506560ef1","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"ca4c9837-129f-4222-a005-ccebb3ccd5de","type":"BasicTickFormatter"},"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"4db7dfc8-cc5b-4d91-908f-ed3f34c8e57f","type":"BasicTicker"}},"id":"f67a68d7-a88e-4c74-a776-2c5bfc00833d","type":"LinearAxis"},{"attributes":{"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"}},"id":"ce8b9973-701e-4f3c-a1f7-1d9dafa0c973","type":"ResetTool"},{"attributes":{},"id":"4db7dfc8-cc5b-4d91-908f-ed3f34c8e57f","type":"BasicTicker"},{"attributes":{"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"}},"id":"eb6d463b-862c-4ea7-ae69-b93dae0a7c9a","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eb6d463b-862c-4ea7-ae69-b93dae0a7c9a","type":"PanTool"},{"id":"c015da1c-48f6-4f54-ad12-1b6d2cb5b2a5","type":"WheelZoomTool"},{"id":"830ce763-8349-4a4e-86d5-a1457709594e","type":"BoxZoomTool"},{"id":"23d90893-bff4-4393-956c-a4d00652c56b","type":"SaveTool"},{"id":"ce8b9973-701e-4f3c-a1f7-1d9dafa0c973","type":"ResetTool"},{"id":"da640e9f-27ae-414f-98b7-a81c7a5bb339","type":"HelpTool"}]},"id":"0cf3459c-2638-45a7-bc18-ad6dbd67d6a9","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"48650e38-8da8-4b9f-8509-5a39005952c9","type":"InvertedTriangle"},{"attributes":{"callback":null},"id":"a47fa9f3-8eb8-419d-82eb-491a88afc136","type":"DataRange1d"},{"attributes":{"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"}},"id":"23d90893-bff4-4393-956c-a4d00652c56b","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19686836-7cb1-4861-b47c-70cfd5a655a4","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"4337268c-6969-4c96-8611-4f25af6cb4b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"4db7dfc8-cc5b-4d91-908f-ed3f34c8e57f","type":"BasicTicker"}},"id":"c7493acc-9352-44e3-981c-f516e122888f","type":"Grid"}],"root_ids":["4337268c-6969-4c96-8611-4f25af6cb4b1"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"bac28d8c-5c56-48bb-8606-8bf1be4bfe76","elementid":"d9ddc068-66a9-4f7a-b897-f76e1fd96866","modelid":"4337268c-6969-4c96-8611-4f25af6cb4b1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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

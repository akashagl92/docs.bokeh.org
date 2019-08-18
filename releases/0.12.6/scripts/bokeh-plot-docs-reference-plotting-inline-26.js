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
      };var element = document.getElementById("30a63c09-cd7f-4118-81f4-9dc59f833100");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30a63c09-cd7f-4118-81f4-9dc59f833100' but no matching script tag was found. ")
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
                var docs_json = {"83d0ff67-eec1-4435-8898-6504a9caeba8":{"roots":{"references":[{"attributes":{},"id":"d1ce2a8b-2ad0-4020-a45d-674f7beadafe","type":"ToolEvents"},{"attributes":{},"id":"dc07c16d-e39c-41dc-90b5-886a2f231cb6","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d8b46f02-683d-48f3-a5a7-9446285dff5a","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"da70b14d-62c7-41d5-9cdd-743b38c1aba4","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2457b772-03ad-4fc9-9369-11b44f831b60","type":"ColumnDataSource"},"glyph":{"id":"486a0137-814d-4bff-b516-e2075b1b2ed1","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1079cbd9-5368-47d8-9693-eee2cbdc82d5","type":"X"},"selection_glyph":null},"id":"7d5b1e6f-ff28-4b9d-9c73-76860233f9c7","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"e15f7a30-78f5-4477-a26e-a1b371c00adc","type":"BasicTickFormatter"},"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc07c16d-e39c-41dc-90b5-886a2f231cb6","type":"BasicTicker"}},"id":"1b187606-d1fa-48a0-9ec5-997da68c3242","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc07c16d-e39c-41dc-90b5-886a2f231cb6","type":"BasicTicker"}},"id":"02b42ffe-5b57-4e05-aa67-eeaad9d82895","type":"Grid"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"486a0137-814d-4bff-b516-e2075b1b2ed1","type":"X"},{"attributes":{"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"}},"id":"c38e5998-d317-4d1f-b7ab-9f54fbf6b4a5","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d8b46f02-683d-48f3-a5a7-9446285dff5a","type":"BoxAnnotation"},"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"}},"id":"e51cfd73-c77b-42f9-ba13-a4616130ebee","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"865e0d70-6177-414d-b861-d526699bdbb8","type":"LinearAxis"}],"left":[{"id":"1b187606-d1fa-48a0-9ec5-997da68c3242","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"865e0d70-6177-414d-b861-d526699bdbb8","type":"LinearAxis"},{"id":"ab4f5d78-0e91-46d6-95ad-8dff083226b6","type":"Grid"},{"id":"1b187606-d1fa-48a0-9ec5-997da68c3242","type":"LinearAxis"},{"id":"02b42ffe-5b57-4e05-aa67-eeaad9d82895","type":"Grid"},{"id":"d8b46f02-683d-48f3-a5a7-9446285dff5a","type":"BoxAnnotation"},{"id":"7d5b1e6f-ff28-4b9d-9c73-76860233f9c7","type":"GlyphRenderer"}],"title":{"id":"13b46dc5-e466-4c53-bcd3-bc56b17aa798","type":"Title"},"tool_events":{"id":"d1ce2a8b-2ad0-4020-a45d-674f7beadafe","type":"ToolEvents"},"toolbar":{"id":"2446adf4-ef2e-409b-abeb-11624478898a","type":"Toolbar"},"x_range":{"id":"603edf9c-eeee-4dfd-8901-d4273ff7fb06","type":"DataRange1d"},"x_scale":{"id":"26295f6a-31c2-418c-857e-43078f20cf3c","type":"LinearScale"},"y_range":{"id":"da70b14d-62c7-41d5-9cdd-743b38c1aba4","type":"DataRange1d"},"y_scale":{"id":"21f4af85-27fa-4468-a1be-3249cec8fd64","type":"LinearScale"}},"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"603edf9c-eeee-4dfd-8901-d4273ff7fb06","type":"DataRange1d"},{"attributes":{},"id":"e15f7a30-78f5-4477-a26e-a1b371c00adc","type":"BasicTickFormatter"},{"attributes":{},"id":"c86320e8-abc6-4916-b3dd-60c8cd2a9b69","type":"BasicTicker"},{"attributes":{"formatter":{"id":"49c8fdc6-d1bf-428a-8074-50dcced0139a","type":"BasicTickFormatter"},"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"c86320e8-abc6-4916-b3dd-60c8cd2a9b69","type":"BasicTicker"}},"id":"865e0d70-6177-414d-b861-d526699bdbb8","type":"LinearAxis"},{"attributes":{"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"}},"id":"335325d3-6dda-4bc5-ae2c-2dd9d95a080d","type":"HelpTool"},{"attributes":{"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"}},"id":"c6ff9eb3-c148-44e0-9aab-92d5b876f639","type":"SaveTool"},{"attributes":{"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"}},"id":"6403b393-db2c-44bb-a9ac-2e8b3a7684c0","type":"PanTool"},{"attributes":{},"id":"49c8fdc6-d1bf-428a-8074-50dcced0139a","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6403b393-db2c-44bb-a9ac-2e8b3a7684c0","type":"PanTool"},{"id":"c38e5998-d317-4d1f-b7ab-9f54fbf6b4a5","type":"WheelZoomTool"},{"id":"e51cfd73-c77b-42f9-ba13-a4616130ebee","type":"BoxZoomTool"},{"id":"c6ff9eb3-c148-44e0-9aab-92d5b876f639","type":"SaveTool"},{"id":"92733fd3-ba07-489c-b725-7f28ba774449","type":"ResetTool"},{"id":"335325d3-6dda-4bc5-ae2c-2dd9d95a080d","type":"HelpTool"}]},"id":"2446adf4-ef2e-409b-abeb-11624478898a","type":"Toolbar"},{"attributes":{},"id":"21f4af85-27fa-4468-a1be-3249cec8fd64","type":"LinearScale"},{"attributes":{},"id":"26295f6a-31c2-418c-857e-43078f20cf3c","type":"LinearScale"},{"attributes":{"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"}},"id":"92733fd3-ba07-489c-b725-7f28ba774449","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1079cbd9-5368-47d8-9693-eee2cbdc82d5","type":"X"},{"attributes":{"callback":null,"column_names":["y","size","x"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"2457b772-03ad-4fc9-9369-11b44f831b60","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f2a3bced-f0f5-4d2a-903c-1a24802457c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"c86320e8-abc6-4916-b3dd-60c8cd2a9b69","type":"BasicTicker"}},"id":"ab4f5d78-0e91-46d6-95ad-8dff083226b6","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"13b46dc5-e466-4c53-bcd3-bc56b17aa798","type":"Title"}],"root_ids":["f2a3bced-f0f5-4d2a-903c-1a24802457c2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"83d0ff67-eec1-4435-8898-6504a9caeba8","elementid":"30a63c09-cd7f-4118-81f4-9dc59f833100","modelid":"f2a3bced-f0f5-4d2a-903c-1a24802457c2"}];
                
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

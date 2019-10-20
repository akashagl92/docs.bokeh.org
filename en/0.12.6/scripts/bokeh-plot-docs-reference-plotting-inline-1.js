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
      };var element = document.getElementById("02b25739-907b-4878-91be-8c465ec9a324");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '02b25739-907b-4878-91be-8c465ec9a324' but no matching script tag was found. ")
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
                var docs_json = {"9df3e26f-e8c8-4eb8-9f7e-543ad6804f3a":{"roots":{"references":[{"attributes":{"below":[{"id":"28b77c5f-1df9-43d2-804c-7492be476f81","type":"LinearAxis"}],"left":[{"id":"2e0ed3c2-fbac-4f5e-a68b-f5cacd86e9a1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"28b77c5f-1df9-43d2-804c-7492be476f81","type":"LinearAxis"},{"id":"a046fc50-ead0-446d-a714-0227507dcae2","type":"Grid"},{"id":"2e0ed3c2-fbac-4f5e-a68b-f5cacd86e9a1","type":"LinearAxis"},{"id":"438fcf24-2155-4f71-a2d4-9c2766f3a7ee","type":"Grid"},{"id":"974f5c65-733e-4d92-80ed-3255ff40a022","type":"BoxAnnotation"},{"id":"8e8b8f48-6b08-45fb-90a8-bf1cd744adce","type":"GlyphRenderer"}],"title":{"id":"e9d3529b-472e-4dfd-817b-8d5a284e8f02","type":"Title"},"tool_events":{"id":"21bd7aa6-11db-49a2-a715-2fe0f8d757f7","type":"ToolEvents"},"toolbar":{"id":"a9b6961a-a9a5-40a2-80f3-7533f19f9f76","type":"Toolbar"},"x_range":{"id":"9da3232a-5364-4197-955d-877b9893e326","type":"DataRange1d"},"x_scale":{"id":"7aeb3ce8-b236-4b99-9e28-d09994c30f23","type":"LinearScale"},"y_range":{"id":"5516f92e-ac7d-4031-b4fe-1f3e4c48cc5e","type":"DataRange1d"},"y_scale":{"id":"85e0821d-e951-475e-a0e0-ddea155fce5c","type":"LinearScale"}},"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9534c986-cc00-47dd-b994-87e2a81e4726","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7ea17f91-05fa-40cc-b4ff-d4a0b6997c08","type":"PanTool"},{"id":"f4c44fe8-1b79-4b0b-b8fc-0ebc71257c2f","type":"WheelZoomTool"},{"id":"bd563dd3-a646-43d9-be64-c5bc0ecfef78","type":"BoxZoomTool"},{"id":"b5e24787-0f13-4ad6-8e8f-1d877c4019d5","type":"SaveTool"},{"id":"a505da87-6d44-4b84-857a-d799613b8830","type":"ResetTool"},{"id":"6b5505b1-e55f-419b-9e61-25e2675972f6","type":"HelpTool"}]},"id":"a9b6961a-a9a5-40a2-80f3-7533f19f9f76","type":"Toolbar"},{"attributes":{"formatter":{"id":"5890cc46-37de-43af-a38c-b6c8544bf7c6","type":"BasicTickFormatter"},"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bfee16d-cca6-45f4-a4fa-e4e027cf7f1f","type":"BasicTicker"}},"id":"28b77c5f-1df9-43d2-804c-7492be476f81","type":"LinearAxis"},{"attributes":{},"id":"7aeb3ce8-b236-4b99-9e28-d09994c30f23","type":"LinearScale"},{"attributes":{"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"}},"id":"f4c44fe8-1b79-4b0b-b8fc-0ebc71257c2f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"}},"id":"b5e24787-0f13-4ad6-8e8f-1d877c4019d5","type":"SaveTool"},{"attributes":{},"id":"4a75fe0d-fa66-4156-82d7-a5f01e0d7085","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9534c986-cc00-47dd-b994-87e2a81e4726","type":"BasicTickFormatter"},"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a75fe0d-fa66-4156-82d7-a5f01e0d7085","type":"BasicTicker"}},"id":"2e0ed3c2-fbac-4f5e-a68b-f5cacd86e9a1","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e7f78d6-990e-4270-b138-07786db5754b","type":"Asterisk"},{"attributes":{},"id":"21bd7aa6-11db-49a2-a715-2fe0f8d757f7","type":"ToolEvents"},{"attributes":{"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"}},"id":"6b5505b1-e55f-419b-9e61-25e2675972f6","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a75fe0d-fa66-4156-82d7-a5f01e0d7085","type":"BasicTicker"}},"id":"438fcf24-2155-4f71-a2d4-9c2766f3a7ee","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"8c1d9312-d7f0-4664-ac76-129ca46e9856","type":"ColumnDataSource"},{"attributes":{},"id":"1bfee16d-cca6-45f4-a4fa-e4e027cf7f1f","type":"BasicTicker"},{"attributes":{"callback":null},"id":"5516f92e-ac7d-4031-b4fe-1f3e4c48cc5e","type":"DataRange1d"},{"attributes":{"overlay":{"id":"974f5c65-733e-4d92-80ed-3255ff40a022","type":"BoxAnnotation"},"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"}},"id":"bd563dd3-a646-43d9-be64-c5bc0ecfef78","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bfee16d-cca6-45f4-a4fa-e4e027cf7f1f","type":"BasicTicker"}},"id":"a046fc50-ead0-446d-a714-0227507dcae2","type":"Grid"},{"attributes":{"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"}},"id":"7ea17f91-05fa-40cc-b4ff-d4a0b6997c08","type":"PanTool"},{"attributes":{"callback":null},"id":"9da3232a-5364-4197-955d-877b9893e326","type":"DataRange1d"},{"attributes":{},"id":"85e0821d-e951-475e-a0e0-ddea155fce5c","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"e9d3529b-472e-4dfd-817b-8d5a284e8f02","type":"Title"},{"attributes":{"plot":{"id":"3152a074-0afe-491e-80c7-a156f4fdbd1a","subtype":"Figure","type":"Plot"}},"id":"a505da87-6d44-4b84-857a-d799613b8830","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d99d1183-c2b9-4bc9-9459-2267664896b4","type":"Asterisk"},{"attributes":{},"id":"5890cc46-37de-43af-a38c-b6c8544bf7c6","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8c1d9312-d7f0-4664-ac76-129ca46e9856","type":"ColumnDataSource"},"glyph":{"id":"4e7f78d6-990e-4270-b138-07786db5754b","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d99d1183-c2b9-4bc9-9459-2267664896b4","type":"Asterisk"},"selection_glyph":null},"id":"8e8b8f48-6b08-45fb-90a8-bf1cd744adce","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"974f5c65-733e-4d92-80ed-3255ff40a022","type":"BoxAnnotation"}],"root_ids":["3152a074-0afe-491e-80c7-a156f4fdbd1a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"9df3e26f-e8c8-4eb8-9f7e-543ad6804f3a","elementid":"02b25739-907b-4878-91be-8c465ec9a324","modelid":"3152a074-0afe-491e-80c7-a156f4fdbd1a"}];
                
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

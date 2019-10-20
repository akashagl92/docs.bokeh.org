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
      };var element = document.getElementById("ed1c409e-7972-4690-ab5f-37034fca7384");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ed1c409e-7972-4690-ab5f-37034fca7384' but no matching script tag was found. ")
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
                var docs_json = {"36612210-b680-43c0-b3ba-ba0f5db0312a":{"roots":{"references":[{"attributes":{"callback":null},"id":"4cb8f4b1-1c74-4e8e-8238-1358c5c0354b","type":"DataRange1d"},{"attributes":{},"id":"6aa0597c-5b75-42e3-9f51-3c1518d4a28f","type":"BasicTicker"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"},"ticker":{"id":"6aa0597c-5b75-42e3-9f51-3c1518d4a28f","type":"BasicTicker"}},"id":"9548b94e-b9ad-487f-90c6-683eca2e75c9","type":"Grid"},{"attributes":{"overlay":{"id":"6a33ca29-aa5c-4c7f-8334-12d1b99808e9","type":"BoxAnnotation"},"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"}},"id":"cfeb7758-0cfe-451d-aef5-d71f40c07259","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"4766f51a-8e63-45a2-a273-99f2b36f798b","type":"DataRange1d"},{"attributes":{"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"}},"id":"ce49cbfc-7794-452e-9979-30c627c6c8e8","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"588f9cdc-c14c-41c5-a1e1-9cd23d25e450","type":"Circle"},{"attributes":{},"id":"e7eeac05-2788-4f19-9965-d2faa0e39886","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f3eba3a-41ba-47ef-94da-ccdcfd951873","type":"Circle"},{"attributes":{"formatter":{"id":"522ccaea-7276-40e3-b990-f7324729e25a","type":"BasicTickFormatter"},"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f3832d4-deb9-4f84-8fc4-3caa566f36c2","type":"BasicTicker"}},"id":"ce729c96-1a49-423a-b5a8-9530aac65a3c","type":"LinearAxis"},{"attributes":{"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"}},"id":"66d982bf-4485-4973-b9f8-2c119e915e53","type":"PanTool"},{"attributes":{"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"}},"id":"e3f56ce9-b05d-4498-ad3c-2b4d8b1a0547","type":"WheelZoomTool"},{"attributes":{},"id":"deddc51e-0d38-42c5-a8e0-00b8ac06b41a","type":"ToolEvents"},{"attributes":{"below":[{"id":"ce729c96-1a49-423a-b5a8-9530aac65a3c","type":"LinearAxis"}],"left":[{"id":"390f85b4-7ecd-4bd1-b174-763bf9f70b9e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ce729c96-1a49-423a-b5a8-9530aac65a3c","type":"LinearAxis"},{"id":"f516d592-8bca-45bb-9539-43711b9dd9bb","type":"Grid"},{"id":"390f85b4-7ecd-4bd1-b174-763bf9f70b9e","type":"LinearAxis"},{"id":"9548b94e-b9ad-487f-90c6-683eca2e75c9","type":"Grid"},{"id":"6a33ca29-aa5c-4c7f-8334-12d1b99808e9","type":"BoxAnnotation"},{"id":"0285b398-4939-4162-aa0d-044e37c2a572","type":"GlyphRenderer"}],"title":{"id":"4ccacaa3-8ed3-4fe6-b00a-6d68939b2e61","type":"Title"},"tool_events":{"id":"deddc51e-0d38-42c5-a8e0-00b8ac06b41a","type":"ToolEvents"},"toolbar":{"id":"c7ea61fb-9add-430a-987d-0bddb9fbecc2","type":"Toolbar"},"x_range":{"id":"4cb8f4b1-1c74-4e8e-8238-1358c5c0354b","type":"DataRange1d"},"x_scale":{"id":"ce612ffa-69f4-4b02-ba18-19f8e57d2d4c","type":"LinearScale"},"y_range":{"id":"4766f51a-8e63-45a2-a273-99f2b36f798b","type":"DataRange1d"},"y_scale":{"id":"e7eeac05-2788-4f19-9965-d2faa0e39886","type":"LinearScale"}},"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"}},"id":"4edd2cd7-b7f2-4236-9d6e-77e53f9476aa","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6a33ca29-aa5c-4c7f-8334-12d1b99808e9","type":"BoxAnnotation"},{"attributes":{},"id":"ce612ffa-69f4-4b02-ba18-19f8e57d2d4c","type":"LinearScale"},{"attributes":{"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"}},"id":"a0a3c75f-5619-4452-b289-8032408d5305","type":"HelpTool"},{"attributes":{"formatter":{"id":"fa308da5-e592-459e-bac7-3d70aac9d1fc","type":"BasicTickFormatter"},"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"},"ticker":{"id":"6aa0597c-5b75-42e3-9f51-3c1518d4a28f","type":"BasicTicker"}},"id":"390f85b4-7ecd-4bd1-b174-763bf9f70b9e","type":"LinearAxis"},{"attributes":{},"id":"522ccaea-7276-40e3-b990-f7324729e25a","type":"BasicTickFormatter"},{"attributes":{},"id":"fa308da5-e592-459e-bac7-3d70aac9d1fc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"d1e3f97d-511c-40dc-8059-d160a09e052e","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"66d982bf-4485-4973-b9f8-2c119e915e53","type":"PanTool"},{"id":"e3f56ce9-b05d-4498-ad3c-2b4d8b1a0547","type":"WheelZoomTool"},{"id":"cfeb7758-0cfe-451d-aef5-d71f40c07259","type":"BoxZoomTool"},{"id":"ce49cbfc-7794-452e-9979-30c627c6c8e8","type":"SaveTool"},{"id":"4edd2cd7-b7f2-4236-9d6e-77e53f9476aa","type":"ResetTool"},{"id":"a0a3c75f-5619-4452-b289-8032408d5305","type":"HelpTool"}]},"id":"c7ea61fb-9add-430a-987d-0bddb9fbecc2","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"4ccacaa3-8ed3-4fe6-b00a-6d68939b2e61","type":"Title"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"96f6df71-96d7-4bff-8ce5-257119109c11","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f3832d4-deb9-4f84-8fc4-3caa566f36c2","type":"BasicTicker"}},"id":"f516d592-8bca-45bb-9539-43711b9dd9bb","type":"Grid"},{"attributes":{},"id":"7f3832d4-deb9-4f84-8fc4-3caa566f36c2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d1e3f97d-511c-40dc-8059-d160a09e052e","type":"ColumnDataSource"},"glyph":{"id":"588f9cdc-c14c-41c5-a1e1-9cd23d25e450","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2f3eba3a-41ba-47ef-94da-ccdcfd951873","type":"Circle"},"selection_glyph":null},"id":"0285b398-4939-4162-aa0d-044e37c2a572","type":"GlyphRenderer"}],"root_ids":["96f6df71-96d7-4bff-8ce5-257119109c11"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"36612210-b680-43c0-b3ba-ba0f5db0312a","elementid":"ed1c409e-7972-4690-ab5f-37034fca7384","modelid":"96f6df71-96d7-4bff-8ce5-257119109c11"}];
                
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

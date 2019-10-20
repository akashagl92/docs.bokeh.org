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
      };var element = document.getElementById("e3701c70-b592-4753-9027-d720b9488d23");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e3701c70-b592-4753-9027-d720b9488d23' but no matching script tag was found. ")
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
                var docs_json = {"a1299bbb-2a95-4e23-be9b-98343df79882":{"roots":{"references":[{"attributes":{"overlay":{"id":"181ab0ed-a2a0-415c-8679-68698a7bb6c1","type":"BoxAnnotation"},"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"}},"id":"76c748fb-d387-420b-80ef-ee2f4f09a03b","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"67afee81-cb64-4915-9b39-34bbc3aa1b78","type":"DataRange1d"},{"attributes":{"formatter":{"id":"90f1bbf3-fb6c-4fce-9b0f-64ca667806f9","type":"BasicTickFormatter"},"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"},"ticker":{"id":"1002fb99-7c9b-4d26-ac0d-af1b954f63e3","type":"BasicTicker"}},"id":"5f81c7d0-b795-4663-a193-0034767e3ae5","type":"LinearAxis"},{"attributes":{"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"},"ticker":{"id":"1002fb99-7c9b-4d26-ac0d-af1b954f63e3","type":"BasicTicker"}},"id":"39a68a97-ad9e-4926-8644-068b648f2984","type":"Grid"},{"attributes":{"data_source":{"id":"ecc5b53c-0edb-4cbf-bd37-50e09ceb4061","type":"ColumnDataSource"},"glyph":{"id":"f027a01e-20fc-4fa5-a2dd-02cdab700523","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fccc9730-8e78-4702-9d66-15affdd36e32","type":"Patch"},"selection_glyph":null},"id":"e0880aad-94fe-4adb-b12a-89bd472a8fba","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"}},"id":"9384c42d-a6ee-4268-bc32-61e26e64b15c","type":"ResetTool"},{"attributes":{},"id":"a08e9dc0-6a15-47a7-ad1b-56a1f76a0da4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"}},"id":"7f48fc9d-2e80-4bcb-8192-11cf47f9a85a","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"181ab0ed-a2a0-415c-8679-68698a7bb6c1","type":"BoxAnnotation"},{"attributes":{},"id":"1002fb99-7c9b-4d26-ac0d-af1b954f63e3","type":"BasicTicker"},{"attributes":{"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"}},"id":"a5d3ef68-7734-4a5a-a2dd-9d024780b2c9","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"0eb951e3-be1c-4ce3-b7e9-1d22bdecbf06","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f027a01e-20fc-4fa5-a2dd-02cdab700523","type":"Patch"},{"attributes":{},"id":"1e470406-cff9-4985-b2fe-1c41ff5e43c6","type":"LinearScale"},{"attributes":{"formatter":{"id":"a08e9dc0-6a15-47a7-ad1b-56a1f76a0da4","type":"BasicTickFormatter"},"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d77ecc3-1fca-46da-a8ae-20a1db22ee09","type":"BasicTicker"}},"id":"b362333d-9a7f-4831-b87d-695fd6fc0667","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]}},"id":"ecc5b53c-0edb-4cbf-bd37-50e09ceb4061","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"}},"id":"cb9e5806-9bdf-4b47-ba60-7f8158c3c42a","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d77ecc3-1fca-46da-a8ae-20a1db22ee09","type":"BasicTicker"}},"id":"f47b448e-c44e-4209-9740-837d9b2821f9","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7f48fc9d-2e80-4bcb-8192-11cf47f9a85a","type":"PanTool"},{"id":"a5d3ef68-7734-4a5a-a2dd-9d024780b2c9","type":"WheelZoomTool"},{"id":"76c748fb-d387-420b-80ef-ee2f4f09a03b","type":"BoxZoomTool"},{"id":"9d7748f0-8a9e-453f-8f31-1b2b48e97811","type":"SaveTool"},{"id":"9384c42d-a6ee-4268-bc32-61e26e64b15c","type":"ResetTool"},{"id":"cb9e5806-9bdf-4b47-ba60-7f8158c3c42a","type":"HelpTool"}]},"id":"3f4915a6-ef08-4aa4-9cc7-dfd9064a8299","type":"Toolbar"},{"attributes":{},"id":"d2e179d6-e2fc-4e04-83c2-b9f18bf9efff","type":"LinearScale"},{"attributes":{"plot":{"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"}},"id":"9d7748f0-8a9e-453f-8f31-1b2b48e97811","type":"SaveTool"},{"attributes":{},"id":"16b80129-b027-489d-9f5f-b63a540a3ad8","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fccc9730-8e78-4702-9d66-15affdd36e32","type":"Patch"},{"attributes":{},"id":"90f1bbf3-fb6c-4fce-9b0f-64ca667806f9","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"e2fcdf9e-4a9d-4de2-b166-b42e55d642f9","type":"Title"},{"attributes":{},"id":"0d77ecc3-1fca-46da-a8ae-20a1db22ee09","type":"BasicTicker"},{"attributes":{"below":[{"id":"5f81c7d0-b795-4663-a193-0034767e3ae5","type":"LinearAxis"}],"left":[{"id":"b362333d-9a7f-4831-b87d-695fd6fc0667","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5f81c7d0-b795-4663-a193-0034767e3ae5","type":"LinearAxis"},{"id":"39a68a97-ad9e-4926-8644-068b648f2984","type":"Grid"},{"id":"b362333d-9a7f-4831-b87d-695fd6fc0667","type":"LinearAxis"},{"id":"f47b448e-c44e-4209-9740-837d9b2821f9","type":"Grid"},{"id":"181ab0ed-a2a0-415c-8679-68698a7bb6c1","type":"BoxAnnotation"},{"id":"e0880aad-94fe-4adb-b12a-89bd472a8fba","type":"GlyphRenderer"}],"title":{"id":"e2fcdf9e-4a9d-4de2-b166-b42e55d642f9","type":"Title"},"tool_events":{"id":"16b80129-b027-489d-9f5f-b63a540a3ad8","type":"ToolEvents"},"toolbar":{"id":"3f4915a6-ef08-4aa4-9cc7-dfd9064a8299","type":"Toolbar"},"x_range":{"id":"0eb951e3-be1c-4ce3-b7e9-1d22bdecbf06","type":"DataRange1d"},"x_scale":{"id":"1e470406-cff9-4985-b2fe-1c41ff5e43c6","type":"LinearScale"},"y_range":{"id":"67afee81-cb64-4915-9b39-34bbc3aa1b78","type":"DataRange1d"},"y_scale":{"id":"d2e179d6-e2fc-4e04-83c2-b9f18bf9efff","type":"LinearScale"}},"id":"4a00f109-4cf4-442c-bddc-f4c69e95cd43","subtype":"Figure","type":"Plot"}],"root_ids":["4a00f109-4cf4-442c-bddc-f4c69e95cd43"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"a1299bbb-2a95-4e23-be9b-98343df79882","elementid":"e3701c70-b592-4753-9027-d720b9488d23","modelid":"4a00f109-4cf4-442c-bddc-f4c69e95cd43"}];
                
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

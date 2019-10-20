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
      };var element = document.getElementById("dbad69dd-2bd8-4cb8-9666-9c22efc7c72e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dbad69dd-2bd8-4cb8-9666-9c22efc7c72e' but no matching script tag was found. ")
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
                var docs_json = {"762fadd3-365d-4a26-b907-0c41ed98b718":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d752ac54-363e-4c5d-9fe9-10d719b7c167","type":"BoxAnnotation"},{"attributes":{"label":{"value":"postcard"},"renderers":[{"id":"dcb9f980-3718-4ef0-9b93-5d443b917fd8","type":"GlyphRenderer"}]},"id":"ea521644-455e-4836-8021-cb789ecea369","type":"LegendItem"},{"attributes":{},"id":"35ded900-08be-469e-9151-ad8fa06bc832","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"stamp"},"renderers":[{"id":"df3c422b-0f88-42b2-a550-0b6e7ca0aee6","type":"GlyphRenderer"}]},"id":"13f75b62-6db0-431e-a29e-7924de667621","type":"LegendItem"},{"attributes":{"data_source":{"id":"979d333b-4e57-4ffd-bfa4-8fc8aa386033","type":"ColumnDataSource"},"glyph":{"id":"86e8110e-7559-4aa8-b5fc-5f0cb3100f2e","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"df3c422b-0f88-42b2-a550-0b6e7ca0aee6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":{"__ndarray__":"H4XrUbge1T8fhetRuB7VPx+F61G4HtU/H4XrUbge1T/D9Shcj8LVP8P1KFyPwtU/rkfhehSu1z+uR+F6FK7XP65H4XoUrtc/rkfhehSu1z+uR+F6FK7XP65H4XoUrtc/rkfhehSu1z+uR+F6FK7XP/YoXI/C9dg/9ihcj8L12D89CtejcD3aPz0K16NwPdo/4XoUrkfh2j/hehSuR+HaPylcj8L1KNw/KVyPwvUo3D8pXI/C9SjcPylcj8L1KNw/KVyPwvUo3D8pXI/C9SjcP83MzMzMzNw/zczMzMzM3D9xPQrXo3DdP3E9CtejcN0/XI/C9Shc3z9cj8L1KFzfP1yPwvUoXN8/","dtype":"float64","shape":[33]}}},"id":"979d333b-4e57-4ffd-bfa4-8fc8aa386033","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"35ded900-08be-469e-9151-ad8fa06bc832","type":"BasicTickFormatter"},"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"},"ticker":{"id":"805aaea1-de46-486d-b9a0-6a879065fa30","type":"BasicTicker"}},"id":"9994c058-573c-41fb-ab03-724675c446f1","type":"LinearAxis"},{"attributes":{"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"},"ticker":{"id":"3a63c8e3-bb51-426c-b394-01ad7a245f8a","type":"BasicTicker"}},"id":"054493d9-e97e-4476-a694-40fdf66a282b","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0b98d28d-654a-43ab-829a-7bd480b37db9","type":"PanTool"},{"id":"08e31e58-1d58-4b95-89c8-38250a4d47d0","type":"WheelZoomTool"},{"id":"1715b6af-164e-4ead-98f4-1a9a4ad44650","type":"BoxZoomTool"},{"id":"4f44835a-ab00-4eee-a755-ec91e3ca3387","type":"SaveTool"},{"id":"12b7c20a-4f3e-4e87-9a69-fbfc0a8e0435","type":"ResetTool"},{"id":"13cf4b62-b2ea-44b5-9527-7aaa1752a2d2","type":"HelpTool"}]},"id":"be4b78de-4124-43ff-9199-587fef6c4055","type":"Toolbar"},{"attributes":{"axis_label":"index","formatter":{"id":"1180974e-89ba-4d8e-9c8a-a7caa93b0108","type":"BasicTickFormatter"},"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"},"ticker":{"id":"3a63c8e3-bb51-426c-b394-01ad7a245f8a","type":"BasicTicker"}},"id":"61dcb502-08fc-4b78-9ae2-7301d143d46c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT/hehSuR+HKP+F6FK5H4co/cT0K16NwzT9xPQrXo3DNP3E9CtejcM0/cT0K16NwzT9xPQrXo3DNP3E9CtejcM0/cT0K16NwzT9xPQrXo3DNP7gehetRuM4/uB6F61G4zj+kcD0K16PQP6RwPQrXo9A/SOF6FK5H0T9I4XoUrkfRP+xRuB6F69E/7FG4HoXr0T/sUbgehevRP+xRuB6F69E/j8L1KFyP0j+PwvUoXI/SP3sUrkfhetQ/exSuR+F61D8fhetRuB7VPx+F61G4HtU/w/UoXI/C1T/D9Shcj8LVP2ZmZmZmZtY/","dtype":"float64","shape":[33]}}},"id":"838b4a8b-cb91-4385-8eea-608ca016316a","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"61dcb502-08fc-4b78-9ae2-7301d143d46c","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"9994c058-573c-41fb-ab03-724675c446f1","type":"LinearAxis"}],"renderers":[{"id":"d752ac54-363e-4c5d-9fe9-10d719b7c167","type":"BoxAnnotation"},{"id":"df3c422b-0f88-42b2-a550-0b6e7ca0aee6","type":"GlyphRenderer"},{"id":"dcb9f980-3718-4ef0-9b93-5d443b917fd8","type":"GlyphRenderer"},{"id":"93f4bde2-5955-4e35-a715-0e70ccac926c","type":"Legend"},{"id":"61dcb502-08fc-4b78-9ae2-7301d143d46c","type":"LinearAxis"},{"id":"9994c058-573c-41fb-ab03-724675c446f1","type":"LinearAxis"},{"id":"054493d9-e97e-4476-a694-40fdf66a282b","type":"Grid"},{"id":"655da25b-dac8-4879-8ac2-8ed167f29c8f","type":"Grid"}],"title":{"id":"0481c962-b324-430f-8ea7-7fe968ab7606","type":"Title"},"tool_events":{"id":"898ca23e-a134-4688-90f9-b262bfe07dc4","type":"ToolEvents"},"toolbar":{"id":"be4b78de-4124-43ff-9199-587fef6c4055","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"b936a9ed-56b3-4107-9da8-0f973e640983","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1e6bf0a3-320c-485b-bb6f-6c3aab1c0451","type":"Range1d"}},"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"}},"id":"12b7c20a-4f3e-4e87-9a69-fbfc0a8e0435","type":"ResetTool"},{"attributes":{"data_source":{"id":"838b4a8b-cb91-4385-8eea-608ca016316a","type":"ColumnDataSource"},"glyph":{"id":"a0ffa2d3-4894-4ae2-aae0-e5795332bf6b","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dcb9f980-3718-4ef0-9b93-5d443b917fd8","type":"GlyphRenderer"},{"attributes":{},"id":"1180974e-89ba-4d8e-9c8a-a7caa93b0108","type":"BasicTickFormatter"},{"attributes":{},"id":"3a63c8e3-bb51-426c-b394-01ad7a245f8a","type":"BasicTicker"},{"attributes":{"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"}},"id":"13cf4b62-b2ea-44b5-9527-7aaa1752a2d2","type":"HelpTool"},{"attributes":{"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"}},"id":"0b98d28d-654a-43ab-829a-7bd480b37db9","type":"PanTool"},{"attributes":{"items":[{"id":"13f75b62-6db0-431e-a29e-7924de667621","type":"LegendItem"},{"id":"ea521644-455e-4836-8021-cb789ecea369","type":"LegendItem"}],"location":"top_left","plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"}},"id":"93f4bde2-5955-4e35-a715-0e70ccac926c","type":"Legend"},{"attributes":{},"id":"898ca23e-a134-4688-90f9-b262bfe07dc4","type":"ToolEvents"},{"attributes":{"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"}},"id":"08e31e58-1d58-4b95-89c8-38250a4d47d0","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"86e8110e-7559-4aa8-b5fc-5f0cb3100f2e","type":"Line"},{"attributes":{"overlay":{"id":"d752ac54-363e-4c5d-9fe9-10d719b7c167","type":"BoxAnnotation"},"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"}},"id":"1715b6af-164e-4ead-98f4-1a9a4ad44650","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"b936a9ed-56b3-4107-9da8-0f973e640983","type":"Range1d"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"a0ffa2d3-4894-4ae2-aae0-e5795332bf6b","type":"Line"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"1e6bf0a3-320c-485b-bb6f-6c3aab1c0451","type":"Range1d"},{"attributes":{"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"}},"id":"4f44835a-ab00-4eee-a755-ec91e3ca3387","type":"SaveTool"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"0481c962-b324-430f-8ea7-7fe968ab7606","type":"Title"},{"attributes":{},"id":"805aaea1-de46-486d-b9a0-6a879065fa30","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43","subtype":"Chart","type":"Plot"},"ticker":{"id":"805aaea1-de46-486d-b9a0-6a879065fa30","type":"BasicTicker"}},"id":"655da25b-dac8-4879-8ac2-8ed167f29c8f","type":"Grid"}],"root_ids":["3168ae72-22a5-48fb-b6a9-e36c4f9bbc43"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"762fadd3-365d-4a26-b907-0c41ed98b718","elementid":"dbad69dd-2bd8-4cb8-9666-9c22efc7c72e","modelid":"3168ae72-22a5-48fb-b6a9-e36c4f9bbc43"}];
                
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

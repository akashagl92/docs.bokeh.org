document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("35eb413f-b7cf-445f-8011-e34a50aa64a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35eb413f-b7cf-445f-8011-e34a50aa64a0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"fe49ba7b-6e86-46ba-8da6-0870d31d61db":{"roots":{"references":[{"attributes":{"data_source":{"id":"ef55663d-63ce-4ac5-8703-eae9b8742dc8","type":"ColumnDataSource"},"glyph":{"id":"8f062abe-3452-4f8f-b744-e619e07c4249","type":"Quadratic"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"51ad1ff9-0b29-4f9c-850b-82ea6a30b67b","type":"GlyphRenderer"},{"attributes":{},"id":"848de24f-857f-4d6b-aa02-52d04758ee71","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"06216d67-948d-412a-bbcc-2b3a3f7d070f","type":"Plot"},"ticker":{"id":"0738aa62-9170-4064-b85d-51ddf9fc3dbf","type":"BasicTicker"}},"id":"96259715-945e-46bc-9eb5-9487cfd1685b","type":"Grid"},{"attributes":{},"id":"0738aa62-9170-4064-b85d-51ddf9fc3dbf","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","yp01","xp01","xp02"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"ef55663d-63ce-4ac5-8703-eae9b8742dc8","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"06216d67-948d-412a-bbcc-2b3a3f7d070f","type":"Plot"},"ticker":{"id":"207f6b1c-ddd4-4f85-b095-4f5663366266","type":"BasicTicker"}},"id":"21660fcb-92b1-4e65-ac2c-1f1707f04e87","type":"Grid"},{"attributes":{},"id":"4c6d0cba-2ed3-4f64-9a03-f233343d79c3","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"43d5fbc7-dba0-4c52-8011-999ec04712e4","type":"BasicTickFormatter"},"plot":{"id":"06216d67-948d-412a-bbcc-2b3a3f7d070f","type":"Plot"},"ticker":{"id":"207f6b1c-ddd4-4f85-b095-4f5663366266","type":"BasicTicker"}},"id":"5ddb3ecf-687a-4b11-bb5d-4540b8599419","type":"LinearAxis"},{"attributes":{"formatter":{"id":"4c6d0cba-2ed3-4f64-9a03-f233343d79c3","type":"BasicTickFormatter"},"plot":{"id":"06216d67-948d-412a-bbcc-2b3a3f7d070f","type":"Plot"},"ticker":{"id":"0738aa62-9170-4064-b85d-51ddf9fc3dbf","type":"BasicTicker"}},"id":"1ad22090-cedf-4610-bd32-f80de711b290","type":"LinearAxis"},{"attributes":{"below":[{"id":"5ddb3ecf-687a-4b11-bb5d-4540b8599419","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1ad22090-cedf-4610-bd32-f80de711b290","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"51ad1ff9-0b29-4f9c-850b-82ea6a30b67b","type":"GlyphRenderer"},{"id":"5ddb3ecf-687a-4b11-bb5d-4540b8599419","type":"LinearAxis"},{"id":"1ad22090-cedf-4610-bd32-f80de711b290","type":"LinearAxis"},{"id":"21660fcb-92b1-4e65-ac2c-1f1707f04e87","type":"Grid"},{"id":"96259715-945e-46bc-9eb5-9487cfd1685b","type":"Grid"}],"title":null,"tool_events":{"id":"848de24f-857f-4d6b-aa02-52d04758ee71","type":"ToolEvents"},"toolbar":{"id":"e6544e44-35b6-47e4-887c-268d8ae0beac","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9c94519c-1ba5-4155-a0c7-3f8d781b9f76","type":"DataRange1d"},"y_range":{"id":"ee8aa165-3fb1-43ae-8577-1c35d937474e","type":"DataRange1d"}},"id":"06216d67-948d-412a-bbcc-2b3a3f7d070f","type":"Plot"},{"attributes":{},"id":"207f6b1c-ddd4-4f85-b095-4f5663366266","type":"BasicTicker"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"8f062abe-3452-4f8f-b744-e619e07c4249","type":"Quadratic"},{"attributes":{"callback":null},"id":"ee8aa165-3fb1-43ae-8577-1c35d937474e","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e6544e44-35b6-47e4-887c-268d8ae0beac","type":"Toolbar"},{"attributes":{"callback":null},"id":"9c94519c-1ba5-4155-a0c7-3f8d781b9f76","type":"DataRange1d"},{"attributes":{},"id":"43d5fbc7-dba0-4c52-8011-999ec04712e4","type":"BasicTickFormatter"}],"root_ids":["06216d67-948d-412a-bbcc-2b3a3f7d070f"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"fe49ba7b-6e86-46ba-8da6-0870d31d61db","elementid":"35eb413f-b7cf-445f-8011-e34a50aa64a0","modelid":"06216d67-948d-412a-bbcc-2b3a3f7d070f"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});
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
      };var element = document.getElementById("27d9d25b-0b8e-4767-85e4-4f9dfb5447b7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '27d9d25b-0b8e-4767-85e4-4f9dfb5447b7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"6af5951c-aaea-4c16-aa24-9f8b6d011d66":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"cd38b59a-ffbf-40be-a608-af1e67ed76fe","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"166d9f08-aefb-437c-8a29-aee99630ba91","type":"PanTool"},{"id":"c05fa92b-af88-4f27-851d-9e1d051a67b8","type":"WheelZoomTool"},{"id":"52ee27b8-7254-4449-85da-961519202e22","type":"BoxZoomTool"},{"id":"b52646df-7118-4413-b2e4-f913c708b97e","type":"SaveTool"},{"id":"97154deb-fe1d-41c5-9d43-20c9cd84d38a","type":"ResetTool"},{"id":"43a703de-cae8-48df-b833-3c710fc9c2c7","type":"HelpTool"}]},"id":"36810c65-a0b4-4d20-9e7b-394142ccebf0","type":"Toolbar"},{"attributes":{"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"}},"id":"43a703de-cae8-48df-b833-3c710fc9c2c7","type":"HelpTool"},{"attributes":{"formatter":{"id":"092bd21a-4a84-4a00-a783-a92610d7e783","type":"BasicTickFormatter"},"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c6e7aaf-52d3-421a-8011-e2cb438fcb10","type":"BasicTicker"}},"id":"bf6f5ec2-74fb-47cf-89ca-7ecce65712c4","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"a55c72df-a578-4f0f-95fb-443555c5c36a","type":"Title"},{"attributes":{"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"}},"id":"c05fa92b-af88-4f27-851d-9e1d051a67b8","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"}},"id":"97154deb-fe1d-41c5-9d43-20c9cd84d38a","type":"ResetTool"},{"attributes":{},"id":"9c6e7aaf-52d3-421a-8011-e2cb438fcb10","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"210d3fc0-fd4a-4ac4-8de3-8885e86c8056","type":"InvertedTriangle"},{"attributes":{"formatter":{"id":"b4181221-79c3-461a-b2ae-98060c306492","type":"BasicTickFormatter"},"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0b2dc83-8095-4d93-8c29-3e7dae3d5527","type":"BasicTicker"}},"id":"c0fe2593-faf6-4a49-999c-aab014531b87","type":"LinearAxis"},{"attributes":{"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"}},"id":"b52646df-7118-4413-b2e4-f913c708b97e","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0b2dc83-8095-4d93-8c29-3e7dae3d5527","type":"BasicTicker"}},"id":"5497ca2c-bf0f-4290-894c-a6d4d3288a51","type":"Grid"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"abd7e2ae-d9cb-4fa1-9759-ec2512b2fcb5","type":"InvertedTriangle"},{"attributes":{},"id":"b4181221-79c3-461a-b2ae-98060c306492","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"cd38b59a-ffbf-40be-a608-af1e67ed76fe","type":"ColumnDataSource"},"glyph":{"id":"abd7e2ae-d9cb-4fa1-9759-ec2512b2fcb5","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":{"id":"210d3fc0-fd4a-4ac4-8de3-8885e86c8056","type":"InvertedTriangle"},"selection_glyph":null},"id":"405f25be-2196-4a66-9156-a826231030c5","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"4cfe7864-03ac-4f3a-a26e-e5249443e3eb","type":"BoxAnnotation"},"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"}},"id":"52ee27b8-7254-4449-85da-961519202e22","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"}},"id":"166d9f08-aefb-437c-8a29-aee99630ba91","type":"PanTool"},{"attributes":{"callback":null},"id":"89f2fb7c-e4b6-4602-92fa-9a99193daf03","type":"DataRange1d"},{"attributes":{},"id":"e5d3bf49-4718-496a-9008-6d4e8bbdb532","type":"ToolEvents"},{"attributes":{"callback":null},"id":"1d4a0de0-da0d-489d-8ee6-1b1821dd3f0d","type":"DataRange1d"},{"attributes":{},"id":"c0b2dc83-8095-4d93-8c29-3e7dae3d5527","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4cfe7864-03ac-4f3a-a26e-e5249443e3eb","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"bf6f5ec2-74fb-47cf-89ca-7ecce65712c4","type":"LinearAxis"}],"left":[{"id":"c0fe2593-faf6-4a49-999c-aab014531b87","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bf6f5ec2-74fb-47cf-89ca-7ecce65712c4","type":"LinearAxis"},{"id":"c3e8e909-fd25-46ac-9b04-bbf50f35f11c","type":"Grid"},{"id":"c0fe2593-faf6-4a49-999c-aab014531b87","type":"LinearAxis"},{"id":"5497ca2c-bf0f-4290-894c-a6d4d3288a51","type":"Grid"},{"id":"4cfe7864-03ac-4f3a-a26e-e5249443e3eb","type":"BoxAnnotation"},{"id":"405f25be-2196-4a66-9156-a826231030c5","type":"GlyphRenderer"}],"title":{"id":"a55c72df-a578-4f0f-95fb-443555c5c36a","type":"Title"},"tool_events":{"id":"e5d3bf49-4718-496a-9008-6d4e8bbdb532","type":"ToolEvents"},"toolbar":{"id":"36810c65-a0b4-4d20-9e7b-394142ccebf0","type":"Toolbar"},"x_range":{"id":"89f2fb7c-e4b6-4602-92fa-9a99193daf03","type":"DataRange1d"},"y_range":{"id":"1d4a0de0-da0d-489d-8ee6-1b1821dd3f0d","type":"DataRange1d"}},"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"092bd21a-4a84-4a00-a783-a92610d7e783","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bd93a9d3-8d71-4276-9806-130b6cb85b44","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c6e7aaf-52d3-421a-8011-e2cb438fcb10","type":"BasicTicker"}},"id":"c3e8e909-fd25-46ac-9b04-bbf50f35f11c","type":"Grid"}],"root_ids":["bd93a9d3-8d71-4276-9806-130b6cb85b44"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"6af5951c-aaea-4c16-aa24-9f8b6d011d66","elementid":"27d9d25b-0b8e-4767-85e4-4f9dfb5447b7","modelid":"bd93a9d3-8d71-4276-9806-130b6cb85b44"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
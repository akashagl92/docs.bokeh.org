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
      };var element = document.getElementById("684271e5-6339-41ae-998a-299450daf10f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '684271e5-6339-41ae-998a-299450daf10f' but no matching script tag was found. ")
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
                  var docs_json = {"57d318d6-ac7a-490b-9652-c58ad962423c":{"roots":{"references":[{"attributes":{"callback":null},"id":"fc97becf-fbff-41ed-bd93-44d89089ee30","type":"DataRange1d"},{"attributes":{"callback":null},"id":"edc4a8e1-eb66-4f3e-a6c7-7e77028421f5","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0ac7f27b-7184-4362-8c20-4e13427d4457","type":"Toolbar"},{"attributes":{},"id":"185c4353-c672-4739-8712-731faae59311","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","text","x"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a08e2aa2-9612-43cd-aa77-574564885eb2","type":"ColumnDataSource"},{"attributes":{},"id":"47880e7a-321b-4e1c-86b0-b360880e9f52","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"47880e7a-321b-4e1c-86b0-b360880e9f52","type":"BasicTickFormatter"},"plot":{"id":"885c968e-b81d-4e95-a99b-fd915db30e2f","type":"Plot"},"ticker":{"id":"9b5ca429-e542-41d4-ba71-9d9dac149aeb","type":"BasicTicker"}},"id":"1ffcf72d-0819-4485-871c-e0a03cccf1f5","type":"LinearAxis"},{"attributes":{},"id":"933d3d2e-3f73-4dac-a534-48e1348f2808","type":"ToolEvents"},{"attributes":{"plot":{"id":"885c968e-b81d-4e95-a99b-fd915db30e2f","type":"Plot"},"ticker":{"id":"9b5ca429-e542-41d4-ba71-9d9dac149aeb","type":"BasicTicker"}},"id":"832f3043-4206-4da3-a081-f78e5deb0fce","type":"Grid"},{"attributes":{"formatter":{"id":"185c4353-c672-4739-8712-731faae59311","type":"BasicTickFormatter"},"plot":{"id":"885c968e-b81d-4e95-a99b-fd915db30e2f","type":"Plot"},"ticker":{"id":"a9d5ffa2-315a-40a7-93b8-7288a69e2707","type":"BasicTicker"}},"id":"f36554de-3f4c-4049-9cad-1e671157d783","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"885c968e-b81d-4e95-a99b-fd915db30e2f","type":"Plot"},"ticker":{"id":"a9d5ffa2-315a-40a7-93b8-7288a69e2707","type":"BasicTicker"}},"id":"46ef2704-abd8-4c1b-9665-aa3a15d49178","type":"Grid"},{"attributes":{},"id":"a9d5ffa2-315a-40a7-93b8-7288a69e2707","type":"BasicTicker"},{"attributes":{"below":[{"id":"1ffcf72d-0819-4485-871c-e0a03cccf1f5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f36554de-3f4c-4049-9cad-1e671157d783","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dbf03b49-c53e-4d2b-acb3-9ccd66e4fd52","type":"GlyphRenderer"},{"id":"1ffcf72d-0819-4485-871c-e0a03cccf1f5","type":"LinearAxis"},{"id":"f36554de-3f4c-4049-9cad-1e671157d783","type":"LinearAxis"},{"id":"832f3043-4206-4da3-a081-f78e5deb0fce","type":"Grid"},{"id":"46ef2704-abd8-4c1b-9665-aa3a15d49178","type":"Grid"}],"title":null,"tool_events":{"id":"933d3d2e-3f73-4dac-a534-48e1348f2808","type":"ToolEvents"},"toolbar":{"id":"0ac7f27b-7184-4362-8c20-4e13427d4457","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fc97becf-fbff-41ed-bd93-44d89089ee30","type":"DataRange1d"},"y_range":{"id":"edc4a8e1-eb66-4f3e-a6c7-7e77028421f5","type":"DataRange1d"}},"id":"885c968e-b81d-4e95-a99b-fd915db30e2f","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2de8cc3e-9066-4d95-84d6-32bb11713758","type":"Text"},{"attributes":{"data_source":{"id":"a08e2aa2-9612-43cd-aa77-574564885eb2","type":"ColumnDataSource"},"glyph":{"id":"2de8cc3e-9066-4d95-84d6-32bb11713758","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dbf03b49-c53e-4d2b-acb3-9ccd66e4fd52","type":"GlyphRenderer"},{"attributes":{},"id":"9b5ca429-e542-41d4-ba71-9d9dac149aeb","type":"BasicTicker"}],"root_ids":["885c968e-b81d-4e95-a99b-fd915db30e2f"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"57d318d6-ac7a-490b-9652-c58ad962423c","elementid":"684271e5-6339-41ae-998a-299450daf10f","modelid":"885c968e-b81d-4e95-a99b-fd915db30e2f"}];
                  
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
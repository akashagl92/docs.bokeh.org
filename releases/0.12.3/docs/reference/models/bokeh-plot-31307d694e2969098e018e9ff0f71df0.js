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
      };var element = document.getElementById("be983281-8233-4139-b191-bfa754258418");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be983281-8233-4139-b191-bfa754258418' but no matching script tag was found. ")
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
                  var docs_json = {"8dc18d23-a602-4749-b5f2-e2e1ebdd2440":{"roots":{"references":[{"attributes":{"below":[{"id":"cc98523b-32fe-48f6-9f01-58e62916a93b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"16dc7d51-56a6-4437-b421-a56d31aa953f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"02b31875-e744-482a-b702-5baaa5639fe0","type":"GlyphRenderer"},{"id":"cc98523b-32fe-48f6-9f01-58e62916a93b","type":"LinearAxis"},{"id":"16dc7d51-56a6-4437-b421-a56d31aa953f","type":"LinearAxis"},{"id":"597cfa6e-9982-4a63-8001-860d5212b136","type":"Grid"},{"id":"e9894db5-eae3-4a75-8ce7-6877f2269031","type":"Grid"}],"title":null,"tool_events":{"id":"8748c754-8367-4c6c-986a-56b85afb2a40","type":"ToolEvents"},"toolbar":{"id":"d56ca70c-dbaf-4e0a-a3bf-b91f6b07d38a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c1a61a63-1898-4e59-af37-b6b2c9723d49","type":"DataRange1d"},"y_range":{"id":"844ec02a-fe48-404e-853a-17fd22ff9498","type":"DataRange1d"}},"id":"15ff7cd6-e721-43dd-b66f-0024d921fdee","type":"Plot"},{"attributes":{"callback":null},"id":"c1a61a63-1898-4e59-af37-b6b2c9723d49","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d56ca70c-dbaf-4e0a-a3bf-b91f6b07d38a","type":"Toolbar"},{"attributes":{"callback":null},"id":"844ec02a-fe48-404e-853a-17fd22ff9498","type":"DataRange1d"},{"attributes":{},"id":"8748c754-8367-4c6c-986a-56b85afb2a40","type":"ToolEvents"},{"attributes":{"data_source":{"id":"9998cd1c-398a-4341-9926-2dc27c7748da","type":"ColumnDataSource"},"glyph":{"id":"7888adae-d5ae-4dc3-beb1-bc1580359896","type":"Bezier"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"02b31875-e744-482a-b702-5baaa5639fe0","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"15ff7cd6-e721-43dd-b66f-0024d921fdee","type":"Plot"},"ticker":{"id":"c7f280a6-c810-4dd0-afcd-c6f80ccfc829","type":"BasicTicker"}},"id":"597cfa6e-9982-4a63-8001-860d5212b136","type":"Grid"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"7888adae-d5ae-4dc3-beb1-bc1580359896","type":"Bezier"},{"attributes":{},"id":"382a4a06-ca1a-476c-8d9b-ed22a8abba2d","type":"BasicTickFormatter"},{"attributes":{},"id":"c472931b-303c-438a-bfaa-c2c65be99d7a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","ym01","yp01","xm01","x","xp01","xp02"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-2.1,-1.6,-1.1,-0.6,-0.1,0.4,0.9,1.4,1.9],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[3.8,2.05,0.8,0.04999999999999999,-0.2,0.04999999999999999,0.8,2.05,3.8],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"9998cd1c-398a-4341-9926-2dc27c7748da","type":"ColumnDataSource"},{"attributes":{},"id":"c7f280a6-c810-4dd0-afcd-c6f80ccfc829","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c6854892-5e55-4701-a9f9-751d70984ca8","type":"BasicTickFormatter"},"plot":{"id":"15ff7cd6-e721-43dd-b66f-0024d921fdee","type":"Plot"},"ticker":{"id":"c472931b-303c-438a-bfaa-c2c65be99d7a","type":"BasicTicker"}},"id":"16dc7d51-56a6-4437-b421-a56d31aa953f","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"15ff7cd6-e721-43dd-b66f-0024d921fdee","type":"Plot"},"ticker":{"id":"c472931b-303c-438a-bfaa-c2c65be99d7a","type":"BasicTicker"}},"id":"e9894db5-eae3-4a75-8ce7-6877f2269031","type":"Grid"},{"attributes":{"formatter":{"id":"382a4a06-ca1a-476c-8d9b-ed22a8abba2d","type":"BasicTickFormatter"},"plot":{"id":"15ff7cd6-e721-43dd-b66f-0024d921fdee","type":"Plot"},"ticker":{"id":"c7f280a6-c810-4dd0-afcd-c6f80ccfc829","type":"BasicTicker"}},"id":"cc98523b-32fe-48f6-9f01-58e62916a93b","type":"LinearAxis"},{"attributes":{},"id":"c6854892-5e55-4701-a9f9-751d70984ca8","type":"BasicTickFormatter"}],"root_ids":["15ff7cd6-e721-43dd-b66f-0024d921fdee"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"8dc18d23-a602-4749-b5f2-e2e1ebdd2440","elementid":"be983281-8233-4139-b191-bfa754258418","modelid":"15ff7cd6-e721-43dd-b66f-0024d921fdee"}];
                  
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
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
      };var element = document.getElementById("befb74e5-22f7-45a2-aff8-23e913db9a32");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'befb74e5-22f7-45a2-aff8-23e913db9a32' but no matching script tag was found. ")
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
                  var docs_json = {"f3ecb674-62f6-4645-895c-85af186ea864":{"roots":{"references":[{"attributes":{},"id":"5688b272-3d0e-401d-b858-1130a9ca16c3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"20dbb352-3d9a-4bef-89c9-5571594ee67d","type":"DataRange1d"},{"attributes":{"data_source":{"id":"42e1b1d5-fda3-403e-ad89-2c2d673ab094","type":"ColumnDataSource"},"glyph":{"id":"c11a1ac8-061a-460f-bdaa-9c52871106f4","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2ada7b18-2ba3-4d15-a4de-ff37ef859530","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"b77e6e47-02af-444e-89c1-3733502b58dc","type":"BasicTickFormatter"},"plot":{"id":"38e1cb83-795c-4d94-8c85-d8acaa7ad1ea","type":"Plot"},"ticker":{"id":"7cf97ce9-7124-4a08-b86c-c67c57e10b46","type":"BasicTicker"}},"id":"4d392c17-80c5-425d-9bcd-6a75a31186e8","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"38e1cb83-795c-4d94-8c85-d8acaa7ad1ea","type":"Plot"},"ticker":{"id":"5688b272-3d0e-401d-b858-1130a9ca16c3","type":"BasicTicker"}},"id":"d5d9e56d-487b-4c4a-9638-71b8834d1a5e","type":"Grid"},{"attributes":{"plot":{"id":"38e1cb83-795c-4d94-8c85-d8acaa7ad1ea","type":"Plot"},"ticker":{"id":"7cf97ce9-7124-4a08-b86c-c67c57e10b46","type":"BasicTicker"}},"id":"d713c417-1a95-40bc-abeb-295651bc57b8","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"42e1b1d5-fda3-403e-ad89-2c2d673ab094","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"b7090936-c061-46e1-8528-29839496c53e","type":"BasicTickFormatter"},"plot":{"id":"38e1cb83-795c-4d94-8c85-d8acaa7ad1ea","type":"Plot"},"ticker":{"id":"5688b272-3d0e-401d-b858-1130a9ca16c3","type":"BasicTicker"}},"id":"b6d6ef9d-b3b2-4b60-b84a-82d5431bee4e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c11a1ac8-061a-460f-bdaa-9c52871106f4","type":"Square"},{"attributes":{"below":[{"id":"4d392c17-80c5-425d-9bcd-6a75a31186e8","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b6d6ef9d-b3b2-4b60-b84a-82d5431bee4e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2ada7b18-2ba3-4d15-a4de-ff37ef859530","type":"GlyphRenderer"},{"id":"4d392c17-80c5-425d-9bcd-6a75a31186e8","type":"LinearAxis"},{"id":"b6d6ef9d-b3b2-4b60-b84a-82d5431bee4e","type":"LinearAxis"},{"id":"d713c417-1a95-40bc-abeb-295651bc57b8","type":"Grid"},{"id":"d5d9e56d-487b-4c4a-9638-71b8834d1a5e","type":"Grid"}],"title":null,"tool_events":{"id":"f1c04906-1763-442c-af6f-9d76ff4d9ee3","type":"ToolEvents"},"toolbar":{"id":"fa03ec08-ffa1-4b9c-a6c7-c026265586fe","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20dbb352-3d9a-4bef-89c9-5571594ee67d","type":"DataRange1d"},"y_range":{"id":"1e87eb99-5025-4109-bcfc-d9de24ec8cbe","type":"DataRange1d"}},"id":"38e1cb83-795c-4d94-8c85-d8acaa7ad1ea","type":"Plot"},{"attributes":{"callback":null},"id":"1e87eb99-5025-4109-bcfc-d9de24ec8cbe","type":"DataRange1d"},{"attributes":{},"id":"b7090936-c061-46e1-8528-29839496c53e","type":"BasicTickFormatter"},{"attributes":{},"id":"7cf97ce9-7124-4a08-b86c-c67c57e10b46","type":"BasicTicker"},{"attributes":{},"id":"b77e6e47-02af-444e-89c1-3733502b58dc","type":"BasicTickFormatter"},{"attributes":{},"id":"f1c04906-1763-442c-af6f-9d76ff4d9ee3","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fa03ec08-ffa1-4b9c-a6c7-c026265586fe","type":"Toolbar"}],"root_ids":["38e1cb83-795c-4d94-8c85-d8acaa7ad1ea"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"f3ecb674-62f6-4645-895c-85af186ea864","elementid":"befb74e5-22f7-45a2-aff8-23e913db9a32","modelid":"38e1cb83-795c-4d94-8c85-d8acaa7ad1ea"}];
                  
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
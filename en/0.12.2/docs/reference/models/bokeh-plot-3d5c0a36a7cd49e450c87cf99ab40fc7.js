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
      };var element = document.getElementById("cd4d386f-b584-4cb8-a0b3-afb9641aa343");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd4d386f-b584-4cb8-a0b3-afb9641aa343' but no matching script tag was found. ")
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
                  var docs_json = {"c2c366fc-4993-4289-8775-ab264409ab09":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1a22538a-4cab-465f-8535-0fd97c833c01","type":"Toolbar"},{"attributes":{},"id":"51675845-5aba-4a2a-8f3d-2f8148e8c31b","type":"BasicTicker"},{"attributes":{},"id":"fad074b1-4f6e-4c4d-833a-ce21fbf1a256","type":"ToolEvents"},{"attributes":{},"id":"68ccc8ec-b743-4eb9-beb2-39a3d12acf46","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c7f4d45-871c-4cf5-bbda-40697e8f5f4c","type":"Arc"},{"attributes":{"callback":null},"id":"8402168c-682d-42cd-ac85-7b0cac0bcfde","type":"DataRange1d"},{"attributes":{"below":[{"id":"753ff35b-3c23-4547-9f3a-ab7adf8eff5f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"592fd41d-783e-484b-a106-5e2a11a4d88b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"91e0fe90-048e-4de3-a89f-62ca26eba575","type":"GlyphRenderer"},{"id":"753ff35b-3c23-4547-9f3a-ab7adf8eff5f","type":"LinearAxis"},{"id":"592fd41d-783e-484b-a106-5e2a11a4d88b","type":"LinearAxis"},{"id":"c1e11918-eec3-4e7f-a0a5-2fd40fa27034","type":"Grid"},{"id":"5b97a80b-cd4c-43c0-bf1c-4ec22db6e68e","type":"Grid"}],"title":null,"tool_events":{"id":"fad074b1-4f6e-4c4d-833a-ce21fbf1a256","type":"ToolEvents"},"toolbar":{"id":"1a22538a-4cab-465f-8535-0fd97c833c01","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"bc870266-c642-460a-a0b4-95e54bf51b85","type":"DataRange1d"},"y_range":{"id":"8402168c-682d-42cd-ac85-7b0cac0bcfde","type":"DataRange1d"}},"id":"2bbb8fa8-9bd3-4d36-9aed-868a34b7efd6","type":"Plot"},{"attributes":{"callback":null},"id":"bc870266-c642-460a-a0b4-95e54bf51b85","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"242cdbb4-ffe9-4901-bfcb-15b000f320fb","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"80bbcc8a-e3dd-47ba-b98d-1c6aec742f6a","type":"BasicTickFormatter"},"plot":{"id":"2bbb8fa8-9bd3-4d36-9aed-868a34b7efd6","type":"Plot"},"ticker":{"id":"226437c9-d4f7-45d9-8973-cb1fc672ba44","type":"BasicTicker"}},"id":"753ff35b-3c23-4547-9f3a-ab7adf8eff5f","type":"LinearAxis"},{"attributes":{"plot":{"id":"2bbb8fa8-9bd3-4d36-9aed-868a34b7efd6","type":"Plot"},"ticker":{"id":"226437c9-d4f7-45d9-8973-cb1fc672ba44","type":"BasicTicker"}},"id":"c1e11918-eec3-4e7f-a0a5-2fd40fa27034","type":"Grid"},{"attributes":{"formatter":{"id":"68ccc8ec-b743-4eb9-beb2-39a3d12acf46","type":"BasicTickFormatter"},"plot":{"id":"2bbb8fa8-9bd3-4d36-9aed-868a34b7efd6","type":"Plot"},"ticker":{"id":"51675845-5aba-4a2a-8f3d-2f8148e8c31b","type":"BasicTicker"}},"id":"592fd41d-783e-484b-a106-5e2a11a4d88b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"242cdbb4-ffe9-4901-bfcb-15b000f320fb","type":"ColumnDataSource"},"glyph":{"id":"1c7f4d45-871c-4cf5-bbda-40697e8f5f4c","type":"Arc"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"91e0fe90-048e-4de3-a89f-62ca26eba575","type":"GlyphRenderer"},{"attributes":{},"id":"226437c9-d4f7-45d9-8973-cb1fc672ba44","type":"BasicTicker"},{"attributes":{},"id":"80bbcc8a-e3dd-47ba-b98d-1c6aec742f6a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2bbb8fa8-9bd3-4d36-9aed-868a34b7efd6","type":"Plot"},"ticker":{"id":"51675845-5aba-4a2a-8f3d-2f8148e8c31b","type":"BasicTicker"}},"id":"5b97a80b-cd4c-43c0-bf1c-4ec22db6e68e","type":"Grid"}],"root_ids":["2bbb8fa8-9bd3-4d36-9aed-868a34b7efd6"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"c2c366fc-4993-4289-8775-ab264409ab09","elementid":"cd4d386f-b584-4cb8-a0b3-afb9641aa343","modelid":"2bbb8fa8-9bd3-4d36-9aed-868a34b7efd6"}];
                  
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
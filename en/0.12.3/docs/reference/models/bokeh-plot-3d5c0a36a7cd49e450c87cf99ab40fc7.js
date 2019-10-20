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
      };var element = document.getElementById("77e708b2-3a95-4506-af39-1339626f1ade");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '77e708b2-3a95-4506-af39-1339626f1ade' but no matching script tag was found. ")
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
                  var docs_json = {"a940b221-8db2-428a-9aa3-8b47a9e351a3":{"roots":{"references":[{"attributes":{},"id":"2b41c640-abbc-4034-8aad-b2668be10b58","type":"BasicTicker"},{"attributes":{},"id":"0b305281-48af-4d8b-9c14-c3bddf1f5a09","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"26c982ef-4811-45fb-a3d1-7510900d41ea","type":"Plot"},"ticker":{"id":"2b41c640-abbc-4034-8aad-b2668be10b58","type":"BasicTicker"}},"id":"1423e928-cc3e-47ef-a3f3-64554e18ccc1","type":"Grid"},{"attributes":{"formatter":{"id":"5d5298a7-a02c-42ea-b0d3-9d785b9a02ed","type":"BasicTickFormatter"},"plot":{"id":"26c982ef-4811-45fb-a3d1-7510900d41ea","type":"Plot"},"ticker":{"id":"0b305281-48af-4d8b-9c14-c3bddf1f5a09","type":"BasicTicker"}},"id":"c6102b6c-47fe-474d-b08e-9cf868c7a6c7","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"447dd774-a147-4f0d-afc0-55d82b3d1bb9","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"49873284-10e2-4d1d-9404-81b2024b7afa","type":"DataRange1d"},{"attributes":{"below":[{"id":"c6102b6c-47fe-474d-b08e-9cf868c7a6c7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"191ef6b3-57c5-488b-9747-3288c0a57aa5","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3b574921-f565-462a-9ddd-5f1b3688dc3f","type":"GlyphRenderer"},{"id":"c6102b6c-47fe-474d-b08e-9cf868c7a6c7","type":"LinearAxis"},{"id":"191ef6b3-57c5-488b-9747-3288c0a57aa5","type":"LinearAxis"},{"id":"65bfa6fc-b023-48bf-ab57-946fda5347a0","type":"Grid"},{"id":"1423e928-cc3e-47ef-a3f3-64554e18ccc1","type":"Grid"}],"title":null,"tool_events":{"id":"0469ed4a-7390-4201-9c6f-ae98a31617ae","type":"ToolEvents"},"toolbar":{"id":"449f45e6-90ce-4cb6-bbdf-2da13487f029","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"49873284-10e2-4d1d-9404-81b2024b7afa","type":"DataRange1d"},"y_range":{"id":"74895dc8-6175-4bab-9af4-3292535c4a01","type":"DataRange1d"}},"id":"26c982ef-4811-45fb-a3d1-7510900d41ea","type":"Plot"},{"attributes":{},"id":"5d5298a7-a02c-42ea-b0d3-9d785b9a02ed","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"449f45e6-90ce-4cb6-bbdf-2da13487f029","type":"Toolbar"},{"attributes":{"data_source":{"id":"447dd774-a147-4f0d-afc0-55d82b3d1bb9","type":"ColumnDataSource"},"glyph":{"id":"e24ee66a-93c9-4a23-bca3-e290d44b7290","type":"Arc"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3b574921-f565-462a-9ddd-5f1b3688dc3f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"26c982ef-4811-45fb-a3d1-7510900d41ea","type":"Plot"},"ticker":{"id":"0b305281-48af-4d8b-9c14-c3bddf1f5a09","type":"BasicTicker"}},"id":"65bfa6fc-b023-48bf-ab57-946fda5347a0","type":"Grid"},{"attributes":{"formatter":{"id":"52a7f422-711c-48a8-ba96-d6c2fc857a00","type":"BasicTickFormatter"},"plot":{"id":"26c982ef-4811-45fb-a3d1-7510900d41ea","type":"Plot"},"ticker":{"id":"2b41c640-abbc-4034-8aad-b2668be10b58","type":"BasicTicker"}},"id":"191ef6b3-57c5-488b-9747-3288c0a57aa5","type":"LinearAxis"},{"attributes":{},"id":"52a7f422-711c-48a8-ba96-d6c2fc857a00","type":"BasicTickFormatter"},{"attributes":{},"id":"0469ed4a-7390-4201-9c6f-ae98a31617ae","type":"ToolEvents"},{"attributes":{"callback":null},"id":"74895dc8-6175-4bab-9af4-3292535c4a01","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"e24ee66a-93c9-4a23-bca3-e290d44b7290","type":"Arc"}],"root_ids":["26c982ef-4811-45fb-a3d1-7510900d41ea"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"a940b221-8db2-428a-9aa3-8b47a9e351a3","elementid":"77e708b2-3a95-4506-af39-1339626f1ade","modelid":"26c982ef-4811-45fb-a3d1-7510900d41ea"}];
                  
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
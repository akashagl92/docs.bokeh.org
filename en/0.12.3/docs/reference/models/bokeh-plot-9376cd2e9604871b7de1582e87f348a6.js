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
      };var element = document.getElementById("2919a36c-d4c1-4bc5-9aa2-396f96092424");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2919a36c-d4c1-4bc5-9aa2-396f96092424' but no matching script tag was found. ")
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
                  var docs_json = {"b3de1db3-9af6-4c20-a3d3-79d2e4affde0":{"roots":{"references":[{"attributes":{},"id":"4652bc67-be71-4c23-962e-ec725f0cda5f","type":"ToolEvents"},{"attributes":{"below":[{"id":"e3624e40-d799-44e7-94a5-08d6ae8db46e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"dce44510-6805-406f-8390-1a99c8eadedc","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8ff5e02f-1eed-46d9-875e-6f427ed94bde","type":"GlyphRenderer"},{"id":"e3624e40-d799-44e7-94a5-08d6ae8db46e","type":"LinearAxis"},{"id":"dce44510-6805-406f-8390-1a99c8eadedc","type":"LinearAxis"},{"id":"ac6ae9b2-d2e5-4238-b027-4a110a9884cb","type":"Grid"},{"id":"df25d722-4598-44d9-bbad-e14723c83603","type":"Grid"}],"title":null,"tool_events":{"id":"4652bc67-be71-4c23-962e-ec725f0cda5f","type":"ToolEvents"},"toolbar":{"id":"af5abc17-6849-4cf2-9eec-7322c96e62e5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f82b0122-cd5d-4cf1-baf1-8646c31ecf56","type":"DataRange1d"},"y_range":{"id":"a07f7a86-d33e-4e43-9c15-88ab86c6506c","type":"DataRange1d"}},"id":"51b6cf37-fa11-46e5-931a-3459ea352024","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"af5abc17-6849-4cf2-9eec-7322c96e62e5","type":"Toolbar"},{"attributes":{},"id":"a5ad5895-f88e-436c-b59c-9d92ab296770","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"51b6cf37-fa11-46e5-931a-3459ea352024","type":"Plot"},"ticker":{"id":"729d512b-810b-40ec-8505-80b055fc2cc1","type":"BasicTicker"}},"id":"ac6ae9b2-d2e5-4238-b027-4a110a9884cb","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"fc01e0a7-9e4d-43a2-9564-9ba5fce197f2","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"a5ad5895-f88e-436c-b59c-9d92ab296770","type":"BasicTickFormatter"},"plot":{"id":"51b6cf37-fa11-46e5-931a-3459ea352024","type":"Plot"},"ticker":{"id":"729d512b-810b-40ec-8505-80b055fc2cc1","type":"BasicTicker"}},"id":"e3624e40-d799-44e7-94a5-08d6ae8db46e","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"666219f6-0f07-4750-ab12-416545f972dd","type":"Wedge"},{"attributes":{},"id":"ff34a178-bc4b-48a0-8b06-a31641553135","type":"BasicTickFormatter"},{"attributes":{},"id":"afac1b57-8694-4517-ab4e-165feaf7f9ae","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f82b0122-cd5d-4cf1-baf1-8646c31ecf56","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ff34a178-bc4b-48a0-8b06-a31641553135","type":"BasicTickFormatter"},"plot":{"id":"51b6cf37-fa11-46e5-931a-3459ea352024","type":"Plot"},"ticker":{"id":"afac1b57-8694-4517-ab4e-165feaf7f9ae","type":"BasicTicker"}},"id":"dce44510-6805-406f-8390-1a99c8eadedc","type":"LinearAxis"},{"attributes":{},"id":"729d512b-810b-40ec-8505-80b055fc2cc1","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"51b6cf37-fa11-46e5-931a-3459ea352024","type":"Plot"},"ticker":{"id":"afac1b57-8694-4517-ab4e-165feaf7f9ae","type":"BasicTicker"}},"id":"df25d722-4598-44d9-bbad-e14723c83603","type":"Grid"},{"attributes":{"data_source":{"id":"fc01e0a7-9e4d-43a2-9564-9ba5fce197f2","type":"ColumnDataSource"},"glyph":{"id":"666219f6-0f07-4750-ab12-416545f972dd","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ff5e02f-1eed-46d9-875e-6f427ed94bde","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"a07f7a86-d33e-4e43-9c15-88ab86c6506c","type":"DataRange1d"}],"root_ids":["51b6cf37-fa11-46e5-931a-3459ea352024"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"b3de1db3-9af6-4c20-a3d3-79d2e4affde0","elementid":"2919a36c-d4c1-4bc5-9aa2-396f96092424","modelid":"51b6cf37-fa11-46e5-931a-3459ea352024"}];
                  
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
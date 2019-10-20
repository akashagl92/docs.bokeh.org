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
      };var element = document.getElementById("c49c5b3a-9b10-4df2-88fe-739f01126bb7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c49c5b3a-9b10-4df2-88fe-739f01126bb7' but no matching script tag was found. ")
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
                  var docs_json = {"8e37d677-414e-4b38-bdcb-370fafb1d29e":{"roots":{"references":[{"attributes":{},"id":"0ed51655-1e1b-453a-96a2-a90fbb5b1b10","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"9021b80c-bfb0-495f-9bd7-b06e09d01599","type":"Plot"},"ticker":{"id":"fe556b7d-e5db-4041-b899-7d0d3d4eacad","type":"BasicTicker"}},"id":"27c12444-5c59-403c-9db0-fb78620e5ff4","type":"Grid"},{"attributes":{"formatter":{"id":"e99b8ab8-7cd7-4819-a6c7-0d1248f6cbb9","type":"BasicTickFormatter"},"plot":{"id":"9021b80c-bfb0-495f-9bd7-b06e09d01599","type":"Plot"},"ticker":{"id":"fe556b7d-e5db-4041-b899-7d0d3d4eacad","type":"BasicTicker"}},"id":"50cd17f1-e3e5-435f-8a78-7019cc404ff0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"525b0614-b022-4bd5-8944-ea4d4032cad5","type":"BasicTickFormatter"},"plot":{"id":"9021b80c-bfb0-495f-9bd7-b06e09d01599","type":"Plot"},"ticker":{"id":"e7b7d4b2-29ac-47c6-a2ea-977ca3ad795e","type":"BasicTicker"}},"id":"1d59a50c-fe7d-476a-bd0b-eb1d6220cc4e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"cd068bba-de76-4ee8-8259-39ae09f2f754","type":"HBar"},{"attributes":{},"id":"e99b8ab8-7cd7-4819-a6c7-0d1248f6cbb9","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e29405f3-1401-449f-96ca-6983d290584a","type":"Toolbar"},{"attributes":{"data_source":{"id":"868424ce-5f67-48e7-b688-3cedb542f999","type":"ColumnDataSource"},"glyph":{"id":"cd068bba-de76-4ee8-8259-39ae09f2f754","type":"HBar"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dee96abd-39e2-4be5-9bcc-851456c9ab14","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"9c572af7-cc33-4fac-a74c-1d6469e69227","type":"DataRange1d"},{"attributes":{"below":[{"id":"1d59a50c-fe7d-476a-bd0b-eb1d6220cc4e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"50cd17f1-e3e5-435f-8a78-7019cc404ff0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"dee96abd-39e2-4be5-9bcc-851456c9ab14","type":"GlyphRenderer"},{"id":"1d59a50c-fe7d-476a-bd0b-eb1d6220cc4e","type":"LinearAxis"},{"id":"50cd17f1-e3e5-435f-8a78-7019cc404ff0","type":"LinearAxis"},{"id":"938a45bc-6820-459e-9f3f-ab47cad9108b","type":"Grid"},{"id":"27c12444-5c59-403c-9db0-fb78620e5ff4","type":"Grid"}],"title":null,"tool_events":{"id":"0ed51655-1e1b-453a-96a2-a90fbb5b1b10","type":"ToolEvents"},"toolbar":{"id":"e29405f3-1401-449f-96ca-6983d290584a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9c572af7-cc33-4fac-a74c-1d6469e69227","type":"DataRange1d"},"y_range":{"id":"0e322b0b-7f2e-4afc-89a4-792c8792830d","type":"DataRange1d"}},"id":"9021b80c-bfb0-495f-9bd7-b06e09d01599","type":"Plot"},{"attributes":{},"id":"fe556b7d-e5db-4041-b899-7d0d3d4eacad","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0e322b0b-7f2e-4afc-89a4-792c8792830d","type":"DataRange1d"},{"attributes":{},"id":"525b0614-b022-4bd5-8944-ea4d4032cad5","type":"BasicTickFormatter"},{"attributes":{},"id":"e7b7d4b2-29ac-47c6-a2ea-977ca3ad795e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"y":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0]}},"id":"868424ce-5f67-48e7-b688-3cedb542f999","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"9021b80c-bfb0-495f-9bd7-b06e09d01599","type":"Plot"},"ticker":{"id":"e7b7d4b2-29ac-47c6-a2ea-977ca3ad795e","type":"BasicTicker"}},"id":"938a45bc-6820-459e-9f3f-ab47cad9108b","type":"Grid"}],"root_ids":["9021b80c-bfb0-495f-9bd7-b06e09d01599"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"8e37d677-414e-4b38-bdcb-370fafb1d29e","elementid":"c49c5b3a-9b10-4df2-88fe-739f01126bb7","modelid":"9021b80c-bfb0-495f-9bd7-b06e09d01599"}];
                  
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
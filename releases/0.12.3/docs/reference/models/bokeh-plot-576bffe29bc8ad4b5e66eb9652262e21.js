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
      };var element = document.getElementById("d03486d3-a036-488e-abb5-5211bb9ec701");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd03486d3-a036-488e-abb5-5211bb9ec701' but no matching script tag was found. ")
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
                  var docs_json = {"49b6889b-7c32-4f7a-88b7-5245b7463335":{"roots":{"references":[{"attributes":{"below":[{"id":"59442031-52ae-4e29-8002-56be317e58b3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5c8341cd-6bfd-4248-93b9-3822cf382b94","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b9dffe1d-97a4-402a-b6eb-a427d5d3457f","type":"GlyphRenderer"},{"id":"59442031-52ae-4e29-8002-56be317e58b3","type":"LinearAxis"},{"id":"5c8341cd-6bfd-4248-93b9-3822cf382b94","type":"LinearAxis"},{"id":"369e3f0e-41a8-4467-a709-f09258a9c481","type":"Grid"},{"id":"7e82ebea-c80f-4baa-93cb-2aebb6c96d01","type":"Grid"}],"title":null,"tool_events":{"id":"75eb6400-60d4-43a8-b08c-3c16b6669ac4","type":"ToolEvents"},"toolbar":{"id":"666c4fbe-a053-4d0d-b4ad-af3396181332","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"633392e2-db89-4c92-b5ff-c6adb7284e32","type":"DataRange1d"},"y_range":{"id":"dc9c18ff-fbe3-49c5-9526-71b4d8bbe1fa","type":"DataRange1d"}},"id":"18c29a50-12fa-4e40-92f0-b51dcaa44c65","type":"Plot"},{"attributes":{"formatter":{"id":"2b416e2f-fec0-4c36-bac8-a0abfedbc989","type":"BasicTickFormatter"},"plot":{"id":"18c29a50-12fa-4e40-92f0-b51dcaa44c65","type":"Plot"},"ticker":{"id":"14e6db9c-95ee-4d5b-94df-1d9966768780","type":"BasicTicker"}},"id":"5c8341cd-6bfd-4248-93b9-3822cf382b94","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a5d15624-2fba-4770-831f-9e9a4b30c39d","type":"BasicTickFormatter"},"plot":{"id":"18c29a50-12fa-4e40-92f0-b51dcaa44c65","type":"Plot"},"ticker":{"id":"2f232f14-cae3-4ba1-a082-64a6a2182d04","type":"BasicTicker"}},"id":"59442031-52ae-4e29-8002-56be317e58b3","type":"LinearAxis"},{"attributes":{"data_source":{"id":"e8a10583-ae55-46f5-ab46-453927cc5200","type":"ColumnDataSource"},"glyph":{"id":"81020ff8-5157-440e-b8c9-216e60c3bf6f","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b9dffe1d-97a4-402a-b6eb-a427d5d3457f","type":"GlyphRenderer"},{"attributes":{},"id":"14e6db9c-95ee-4d5b-94df-1d9966768780","type":"BasicTicker"},{"attributes":{"callback":null},"id":"dc9c18ff-fbe3-49c5-9526-71b4d8bbe1fa","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"e8a10583-ae55-46f5-ab46-453927cc5200","type":"ColumnDataSource"},{"attributes":{},"id":"2f232f14-cae3-4ba1-a082-64a6a2182d04","type":"BasicTicker"},{"attributes":{},"id":"75eb6400-60d4-43a8-b08c-3c16b6669ac4","type":"ToolEvents"},{"attributes":{"callback":null},"id":"633392e2-db89-4c92-b5ff-c6adb7284e32","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"81020ff8-5157-440e-b8c9-216e60c3bf6f","type":"InvertedTriangle"},{"attributes":{"dimension":1,"plot":{"id":"18c29a50-12fa-4e40-92f0-b51dcaa44c65","type":"Plot"},"ticker":{"id":"14e6db9c-95ee-4d5b-94df-1d9966768780","type":"BasicTicker"}},"id":"7e82ebea-c80f-4baa-93cb-2aebb6c96d01","type":"Grid"},{"attributes":{"plot":{"id":"18c29a50-12fa-4e40-92f0-b51dcaa44c65","type":"Plot"},"ticker":{"id":"2f232f14-cae3-4ba1-a082-64a6a2182d04","type":"BasicTicker"}},"id":"369e3f0e-41a8-4467-a709-f09258a9c481","type":"Grid"},{"attributes":{},"id":"a5d15624-2fba-4770-831f-9e9a4b30c39d","type":"BasicTickFormatter"},{"attributes":{},"id":"2b416e2f-fec0-4c36-bac8-a0abfedbc989","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"666c4fbe-a053-4d0d-b4ad-af3396181332","type":"Toolbar"}],"root_ids":["18c29a50-12fa-4e40-92f0-b51dcaa44c65"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"49b6889b-7c32-4f7a-88b7-5245b7463335","elementid":"d03486d3-a036-488e-abb5-5211bb9ec701","modelid":"18c29a50-12fa-4e40-92f0-b51dcaa44c65"}];
                  
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
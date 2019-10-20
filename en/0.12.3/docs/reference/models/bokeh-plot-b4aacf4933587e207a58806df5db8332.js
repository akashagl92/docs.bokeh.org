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
      };var element = document.getElementById("c9662388-fe63-47c9-9ff5-52fd5f457df7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9662388-fe63-47c9-9ff5-52fd5f457df7' but no matching script tag was found. ")
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
                  var docs_json = {"bee640d4-670c-478d-9194-0ba9b0227d95":{"roots":{"references":[{"attributes":{"formatter":{"id":"16e9aae1-918d-4afc-ab5e-4dfa8c715456","type":"BasicTickFormatter"},"plot":{"id":"c5284ef9-42bc-41f4-a53f-862403ab0841","type":"Plot"},"ticker":{"id":"6e08cf3a-7862-4d00-ba99-468b25b90b05","type":"BasicTicker"}},"id":"370864e9-39fb-4ddb-9a93-2151579e46a1","type":"LinearAxis"},{"attributes":{"data_source":{"id":"98c69a0a-74fe-430e-8a8e-b3fe44e90f80","type":"ColumnDataSource"},"glyph":{"id":"1ab3d10d-1fe0-4eac-85df-d5319bd78edc","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bb460905-42bf-4a3d-bc00-d014984a6752","type":"GlyphRenderer"},{"attributes":{},"id":"6e08cf3a-7862-4d00-ba99-468b25b90b05","type":"BasicTicker"},{"attributes":{},"id":"19a8a132-6b4c-4eb7-bc45-1a4baa5a1029","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"98c69a0a-74fe-430e-8a8e-b3fe44e90f80","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0b1382d5-4db1-41d7-84df-c9577e762be4","type":"Toolbar"},{"attributes":{"callback":null},"id":"791a4531-d262-40e8-bb1e-3ced4bfd5479","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ab3d10d-1fe0-4eac-85df-d5319bd78edc","type":"CircleX"},{"attributes":{"plot":{"id":"c5284ef9-42bc-41f4-a53f-862403ab0841","type":"Plot"},"ticker":{"id":"19a8a132-6b4c-4eb7-bc45-1a4baa5a1029","type":"BasicTicker"}},"id":"5d81dcab-9a19-40bf-9155-eddae6c4328b","type":"Grid"},{"attributes":{},"id":"16e9aae1-918d-4afc-ab5e-4dfa8c715456","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c5284ef9-42bc-41f4-a53f-862403ab0841","type":"Plot"},"ticker":{"id":"6e08cf3a-7862-4d00-ba99-468b25b90b05","type":"BasicTicker"}},"id":"7252867e-1e6c-479a-95d6-c74ae2669e81","type":"Grid"},{"attributes":{"formatter":{"id":"2740c747-aa3a-4410-a14e-2080ba11f3cf","type":"BasicTickFormatter"},"plot":{"id":"c5284ef9-42bc-41f4-a53f-862403ab0841","type":"Plot"},"ticker":{"id":"19a8a132-6b4c-4eb7-bc45-1a4baa5a1029","type":"BasicTicker"}},"id":"a52e2ead-176b-4be1-ba0a-15c389e94160","type":"LinearAxis"},{"attributes":{"callback":null},"id":"48d2836c-5054-468a-bf56-349c50d6c37d","type":"DataRange1d"},{"attributes":{"below":[{"id":"a52e2ead-176b-4be1-ba0a-15c389e94160","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"370864e9-39fb-4ddb-9a93-2151579e46a1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"bb460905-42bf-4a3d-bc00-d014984a6752","type":"GlyphRenderer"},{"id":"a52e2ead-176b-4be1-ba0a-15c389e94160","type":"LinearAxis"},{"id":"370864e9-39fb-4ddb-9a93-2151579e46a1","type":"LinearAxis"},{"id":"5d81dcab-9a19-40bf-9155-eddae6c4328b","type":"Grid"},{"id":"7252867e-1e6c-479a-95d6-c74ae2669e81","type":"Grid"}],"title":null,"tool_events":{"id":"9386180f-7374-4d60-a16e-f637584ac197","type":"ToolEvents"},"toolbar":{"id":"0b1382d5-4db1-41d7-84df-c9577e762be4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"791a4531-d262-40e8-bb1e-3ced4bfd5479","type":"DataRange1d"},"y_range":{"id":"48d2836c-5054-468a-bf56-349c50d6c37d","type":"DataRange1d"}},"id":"c5284ef9-42bc-41f4-a53f-862403ab0841","type":"Plot"},{"attributes":{},"id":"2740c747-aa3a-4410-a14e-2080ba11f3cf","type":"BasicTickFormatter"},{"attributes":{},"id":"9386180f-7374-4d60-a16e-f637584ac197","type":"ToolEvents"}],"root_ids":["c5284ef9-42bc-41f4-a53f-862403ab0841"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"bee640d4-670c-478d-9194-0ba9b0227d95","elementid":"c9662388-fe63-47c9-9ff5-52fd5f457df7","modelid":"c5284ef9-42bc-41f4-a53f-862403ab0841"}];
                  
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
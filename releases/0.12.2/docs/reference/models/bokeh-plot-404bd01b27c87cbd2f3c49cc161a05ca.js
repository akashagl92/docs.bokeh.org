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
      };var element = document.getElementById("4697d33b-88d5-4e57-a1f2-2b8aa73fc5dc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4697d33b-88d5-4e57-a1f2-2b8aa73fc5dc' but no matching script tag was found. ")
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
                  var docs_json = {"a69c0344-c90a-4ae8-a1a1-5d0108608204":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"14f2ff69-999d-4ff9-abcb-b993577bb5f4","type":"Toolbar"},{"attributes":{"data_source":{"id":"b104c179-ed98-46dd-b874-c1d710b82ebe","type":"ColumnDataSource"},"glyph":{"id":"dddcb69d-aade-4c3b-b24e-78ef2ad94cab","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f75ff848-69b2-480d-8c16-c96ebc2ed548","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"a842d022-4299-4761-9127-61fc67953bb3","type":"BasicTickFormatter"},"plot":{"id":"032e5572-6a1c-4bd2-ade8-ab72dff4dc3c","type":"Plot"},"ticker":{"id":"16f3eb85-55fa-4b3b-8680-99b61baa54d2","type":"BasicTicker"}},"id":"7673268d-9ec6-48d5-9c7d-1fd0f39a9861","type":"LinearAxis"},{"attributes":{"callback":null},"id":"461d1076-422c-4ba4-9f3e-d4b9e0c7e4b6","type":"DataRange1d"},{"attributes":{"plot":{"id":"032e5572-6a1c-4bd2-ade8-ab72dff4dc3c","type":"Plot"},"ticker":{"id":"0b62ac6d-89e9-463a-8e79-60486384550f","type":"BasicTicker"}},"id":"cc2fa217-f3b1-4715-88df-bbcf79779de6","type":"Grid"},{"attributes":{},"id":"a842d022-4299-4761-9127-61fc67953bb3","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"25334ace-5aa7-4b5f-9713-11d9d8a03f64","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"b104c179-ed98-46dd-b874-c1d710b82ebe","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"68acad3d-80b8-4dc1-b05f-2ccc560e9a90","type":"BasicTickFormatter"},"plot":{"id":"032e5572-6a1c-4bd2-ade8-ab72dff4dc3c","type":"Plot"},"ticker":{"id":"0b62ac6d-89e9-463a-8e79-60486384550f","type":"BasicTicker"}},"id":"1705b6c6-4f03-4187-9dc1-f168d10e7698","type":"LinearAxis"},{"attributes":{},"id":"6fcb6866-7a33-4d8e-9f5d-03cb3665a4fa","type":"ToolEvents"},{"attributes":{},"id":"68acad3d-80b8-4dc1-b05f-2ccc560e9a90","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"dddcb69d-aade-4c3b-b24e-78ef2ad94cab","type":"MultiLine"},{"attributes":{"below":[{"id":"1705b6c6-4f03-4187-9dc1-f168d10e7698","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7673268d-9ec6-48d5-9c7d-1fd0f39a9861","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f75ff848-69b2-480d-8c16-c96ebc2ed548","type":"GlyphRenderer"},{"id":"1705b6c6-4f03-4187-9dc1-f168d10e7698","type":"LinearAxis"},{"id":"7673268d-9ec6-48d5-9c7d-1fd0f39a9861","type":"LinearAxis"},{"id":"cc2fa217-f3b1-4715-88df-bbcf79779de6","type":"Grid"},{"id":"5767b50d-c727-4ee8-804d-22491817303d","type":"Grid"}],"title":null,"tool_events":{"id":"6fcb6866-7a33-4d8e-9f5d-03cb3665a4fa","type":"ToolEvents"},"toolbar":{"id":"14f2ff69-999d-4ff9-abcb-b993577bb5f4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"461d1076-422c-4ba4-9f3e-d4b9e0c7e4b6","type":"DataRange1d"},"y_range":{"id":"25334ace-5aa7-4b5f-9713-11d9d8a03f64","type":"DataRange1d"}},"id":"032e5572-6a1c-4bd2-ade8-ab72dff4dc3c","type":"Plot"},{"attributes":{},"id":"16f3eb85-55fa-4b3b-8680-99b61baa54d2","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"032e5572-6a1c-4bd2-ade8-ab72dff4dc3c","type":"Plot"},"ticker":{"id":"16f3eb85-55fa-4b3b-8680-99b61baa54d2","type":"BasicTicker"}},"id":"5767b50d-c727-4ee8-804d-22491817303d","type":"Grid"},{"attributes":{},"id":"0b62ac6d-89e9-463a-8e79-60486384550f","type":"BasicTicker"}],"root_ids":["032e5572-6a1c-4bd2-ade8-ab72dff4dc3c"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"a69c0344-c90a-4ae8-a1a1-5d0108608204","elementid":"4697d33b-88d5-4e57-a1f2-2b8aa73fc5dc","modelid":"032e5572-6a1c-4bd2-ade8-ab72dff4dc3c"}];
                  
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
document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("e8b39cab-a93b-461c-a02a-f02a13d389f3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8b39cab-a93b-461c-a02a-f02a13d389f3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f8dc60f5-fa83-4924-8430-d4f4b4f2830f":{"roots":{"references":[{"attributes":{"callback":null},"id":"54f667d9-8b9d-4d29-991f-1c5f7a3f9635","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"014800db-1641-42d6-af7a-37334438d66b","type":"ColumnDataSource"},{"attributes":{},"id":"8dfbde56-10f9-4c90-89f0-683adecc5469","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"57bd8108-f66c-4aad-8e8e-ac760ad2ce35","type":"DataRange1d"},{"attributes":{},"id":"0195f830-be11-41f9-af1b-3af1c2d6053a","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"02821b17-dfc8-4bc1-8581-06857d8775b7","type":"MultiLine"},{"attributes":{"plot":{"id":"5682c45d-344c-43ce-94d4-057ffd72d5f0","type":"Plot"},"ticker":{"id":"8e3034e4-5a2c-4fdc-bc28-32f979f0fc3c","type":"BasicTicker"}},"id":"e218aee6-f952-4eb6-acb4-dd518cd4bdfc","type":"Grid"},{"attributes":{},"id":"5d269f19-baad-450a-b635-1cf07c30c6fb","type":"ToolEvents"},{"attributes":{"data_source":{"id":"014800db-1641-42d6-af7a-37334438d66b","type":"ColumnDataSource"},"glyph":{"id":"02821b17-dfc8-4bc1-8581-06857d8775b7","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eeface8d-8e39-4d8c-8571-c22a4e6bc5df","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0195f830-be11-41f9-af1b-3af1c2d6053a","type":"BasicTickFormatter"},"plot":{"id":"5682c45d-344c-43ce-94d4-057ffd72d5f0","type":"Plot"},"ticker":{"id":"996310d6-ad10-423f-818c-26daf440cd5c","type":"BasicTicker"}},"id":"7ec3566e-07cf-4923-835c-28e5b535a8e0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8dfbde56-10f9-4c90-89f0-683adecc5469","type":"BasicTickFormatter"},"plot":{"id":"5682c45d-344c-43ce-94d4-057ffd72d5f0","type":"Plot"},"ticker":{"id":"8e3034e4-5a2c-4fdc-bc28-32f979f0fc3c","type":"BasicTicker"}},"id":"295a33f5-c0d1-41cb-a9a1-fba1e831bdf6","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"5682c45d-344c-43ce-94d4-057ffd72d5f0","type":"Plot"},"ticker":{"id":"996310d6-ad10-423f-818c-26daf440cd5c","type":"BasicTicker"}},"id":"3309c62f-068c-45c3-ada6-08db2685318c","type":"Grid"},{"attributes":{},"id":"8e3034e4-5a2c-4fdc-bc28-32f979f0fc3c","type":"BasicTicker"},{"attributes":{},"id":"996310d6-ad10-423f-818c-26daf440cd5c","type":"BasicTicker"},{"attributes":{"below":[{"id":"295a33f5-c0d1-41cb-a9a1-fba1e831bdf6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7ec3566e-07cf-4923-835c-28e5b535a8e0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"eeface8d-8e39-4d8c-8571-c22a4e6bc5df","type":"GlyphRenderer"},{"id":"295a33f5-c0d1-41cb-a9a1-fba1e831bdf6","type":"LinearAxis"},{"id":"7ec3566e-07cf-4923-835c-28e5b535a8e0","type":"LinearAxis"},{"id":"e218aee6-f952-4eb6-acb4-dd518cd4bdfc","type":"Grid"},{"id":"3309c62f-068c-45c3-ada6-08db2685318c","type":"Grid"}],"title":null,"tool_events":{"id":"5d269f19-baad-450a-b635-1cf07c30c6fb","type":"ToolEvents"},"toolbar":{"id":"df39b905-ecf9-4270-bf5c-cd394d38ddc4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"54f667d9-8b9d-4d29-991f-1c5f7a3f9635","type":"DataRange1d"},"y_range":{"id":"57bd8108-f66c-4aad-8e8e-ac760ad2ce35","type":"DataRange1d"}},"id":"5682c45d-344c-43ce-94d4-057ffd72d5f0","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"df39b905-ecf9-4270-bf5c-cd394d38ddc4","type":"Toolbar"}],"root_ids":["5682c45d-344c-43ce-94d4-057ffd72d5f0"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"f8dc60f5-fa83-4924-8430-d4f4b4f2830f","elementid":"e8b39cab-a93b-461c-a02a-f02a13d389f3","modelid":"5682c45d-344c-43ce-94d4-057ffd72d5f0"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
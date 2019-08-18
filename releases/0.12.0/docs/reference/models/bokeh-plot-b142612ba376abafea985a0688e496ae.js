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
      };var element = document.getElementById("4209e49f-8272-4b82-8ca1-8b66e0d57e41");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4209e49f-8272-4b82-8ca1-8b66e0d57e41' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d0acade4-72c2-4cfc-9ba0-650fa89415c0":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"92313dd0-5a16-4920-bb63-9c4325a039ae","type":"Patches"},{"attributes":{"callback":null},"id":"35fe26f6-6137-47f2-9330-44c717d49843","type":"DataRange1d"},{"attributes":{"callback":null},"id":"991150b7-c608-4d88-928e-1fd240451711","type":"DataRange1d"},{"attributes":{"data_source":{"id":"48b33dce-3bb3-4381-b6c0-c354b8bc3c0b","type":"ColumnDataSource"},"glyph":{"id":"92313dd0-5a16-4920-bb63-9c4325a039ae","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f88c1729-197d-40a8-aef7-22c7b56d09a0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"48b33dce-3bb3-4381-b6c0-c354b8bc3c0b","type":"ColumnDataSource"},{"attributes":{},"id":"4504c1cc-23fd-42ba-b691-8c399f3c72af","type":"ToolEvents"},{"attributes":{"plot":{"id":"cbc99215-bc64-4928-821e-2aa11b7a008e","type":"Plot"},"ticker":{"id":"4fa55459-9db7-4775-9a45-b5f3ab95473e","type":"BasicTicker"}},"id":"1a79c806-4910-4f86-958e-afcdac259faa","type":"Grid"},{"attributes":{"formatter":{"id":"cb3f21b1-a5a0-4a8e-8cd5-b45155752e68","type":"BasicTickFormatter"},"plot":{"id":"cbc99215-bc64-4928-821e-2aa11b7a008e","type":"Plot"},"ticker":{"id":"4fa55459-9db7-4775-9a45-b5f3ab95473e","type":"BasicTicker"}},"id":"65eccd00-4cfd-4085-be97-3a78772b89e6","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a2ffb5e3-956c-48c4-a6f6-570a13e29c4b","type":"Toolbar"},{"attributes":{"formatter":{"id":"46441b1f-f737-46d3-996e-7e3855186f8a","type":"BasicTickFormatter"},"plot":{"id":"cbc99215-bc64-4928-821e-2aa11b7a008e","type":"Plot"},"ticker":{"id":"52805547-ec76-4a7d-997d-1476cb1ce0ea","type":"BasicTicker"}},"id":"934337ea-a1e4-4650-82a2-8eb52e20dae7","type":"LinearAxis"},{"attributes":{},"id":"cb3f21b1-a5a0-4a8e-8cd5-b45155752e68","type":"BasicTickFormatter"},{"attributes":{},"id":"4fa55459-9db7-4775-9a45-b5f3ab95473e","type":"BasicTicker"},{"attributes":{},"id":"46441b1f-f737-46d3-996e-7e3855186f8a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"65eccd00-4cfd-4085-be97-3a78772b89e6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"934337ea-a1e4-4650-82a2-8eb52e20dae7","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f88c1729-197d-40a8-aef7-22c7b56d09a0","type":"GlyphRenderer"},{"id":"65eccd00-4cfd-4085-be97-3a78772b89e6","type":"LinearAxis"},{"id":"934337ea-a1e4-4650-82a2-8eb52e20dae7","type":"LinearAxis"},{"id":"1a79c806-4910-4f86-958e-afcdac259faa","type":"Grid"},{"id":"45880eb7-b8e8-4c11-84db-84059eaaa519","type":"Grid"}],"title":null,"tool_events":{"id":"4504c1cc-23fd-42ba-b691-8c399f3c72af","type":"ToolEvents"},"toolbar":{"id":"a2ffb5e3-956c-48c4-a6f6-570a13e29c4b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"35fe26f6-6137-47f2-9330-44c717d49843","type":"DataRange1d"},"y_range":{"id":"991150b7-c608-4d88-928e-1fd240451711","type":"DataRange1d"}},"id":"cbc99215-bc64-4928-821e-2aa11b7a008e","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"cbc99215-bc64-4928-821e-2aa11b7a008e","type":"Plot"},"ticker":{"id":"52805547-ec76-4a7d-997d-1476cb1ce0ea","type":"BasicTicker"}},"id":"45880eb7-b8e8-4c11-84db-84059eaaa519","type":"Grid"},{"attributes":{},"id":"52805547-ec76-4a7d-997d-1476cb1ce0ea","type":"BasicTicker"}],"root_ids":["cbc99215-bc64-4928-821e-2aa11b7a008e"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d0acade4-72c2-4cfc-9ba0-650fa89415c0","elementid":"4209e49f-8272-4b82-8ca1-8b66e0d57e41","modelid":"cbc99215-bc64-4928-821e-2aa11b7a008e"}];
              
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
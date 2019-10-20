(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("fa9e5f23-2ff0-485a-9018-ee4e1f4f6e30");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa9e5f23-2ff0-485a-9018-ee4e1f4f6e30' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"a210d84f-dde8-4008-9316-7563a311739d":{"roots":{"references":[{"attributes":{},"id":"4e373513-e89f-44f1-bcc1-ec0da5c68056","type":"BasicTicker"},{"attributes":{"plot":{"id":"3ff7835f-5e9f-4408-8b7a-7ccb9941b842","type":"Plot"},"ticker":{"id":"4e373513-e89f-44f1-bcc1-ec0da5c68056","type":"BasicTicker"}},"id":"134770e0-4e0d-4c35-91e8-fb4d8700f3d0","type":"Grid"},{"attributes":{},"id":"0e3fb36d-cd7b-4630-99ee-9cd814aaca28","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8d5d5ff8-c832-4e37-b974-f2d3ffca0e0b","type":"Toolbar"},{"attributes":{},"id":"3cbe22e3-6fc9-4371-9fa1-ac680694c05a","type":"ToolEvents"},{"attributes":{"formatter":{"id":"70333bef-2c31-4075-a0fc-eda7b73258bd","type":"BasicTickFormatter"},"plot":{"id":"3ff7835f-5e9f-4408-8b7a-7ccb9941b842","type":"Plot"},"ticker":{"id":"2a81da92-ca0f-4faf-8cf1-3ab6f2a22021","type":"BasicTicker"}},"id":"d01b9a98-8544-4d94-a344-65a3bf800f82","type":"LinearAxis"},{"attributes":{"callback":null},"id":"92482b3c-4f9a-485c-98b0-f8f116262b95","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["right","y"],"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"522c5488-8bf9-4262-9bd6-63625ada754a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"522c5488-8bf9-4262-9bd6-63625ada754a","type":"ColumnDataSource"},"glyph":{"id":"93552295-df34-43e0-a7f3-e1442e91b98c","type":"HBar"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3cbfae68-4b0b-4ac7-a7ac-011a04d6d9a0","type":"GlyphRenderer"},{"attributes":{},"id":"2a81da92-ca0f-4faf-8cf1-3ab6f2a22021","type":"BasicTicker"},{"attributes":{},"id":"70333bef-2c31-4075-a0fc-eda7b73258bd","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"3ff7835f-5e9f-4408-8b7a-7ccb9941b842","type":"Plot"},"ticker":{"id":"2a81da92-ca0f-4faf-8cf1-3ab6f2a22021","type":"BasicTicker"}},"id":"873b9451-029d-4822-9ff8-97d62d83bd3a","type":"Grid"},{"attributes":{"callback":null},"id":"3f076c7a-315c-436a-9a4f-f6a4a103df41","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0e3fb36d-cd7b-4630-99ee-9cd814aaca28","type":"BasicTickFormatter"},"plot":{"id":"3ff7835f-5e9f-4408-8b7a-7ccb9941b842","type":"Plot"},"ticker":{"id":"4e373513-e89f-44f1-bcc1-ec0da5c68056","type":"BasicTicker"}},"id":"586c879c-010e-4077-9ed9-e589c65f53b4","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"93552295-df34-43e0-a7f3-e1442e91b98c","type":"HBar"},{"attributes":{"below":[{"id":"586c879c-010e-4077-9ed9-e589c65f53b4","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d01b9a98-8544-4d94-a344-65a3bf800f82","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3cbfae68-4b0b-4ac7-a7ac-011a04d6d9a0","type":"GlyphRenderer"},{"id":"586c879c-010e-4077-9ed9-e589c65f53b4","type":"LinearAxis"},{"id":"d01b9a98-8544-4d94-a344-65a3bf800f82","type":"LinearAxis"},{"id":"134770e0-4e0d-4c35-91e8-fb4d8700f3d0","type":"Grid"},{"id":"873b9451-029d-4822-9ff8-97d62d83bd3a","type":"Grid"}],"title":null,"tool_events":{"id":"3cbe22e3-6fc9-4371-9fa1-ac680694c05a","type":"ToolEvents"},"toolbar":{"id":"8d5d5ff8-c832-4e37-b974-f2d3ffca0e0b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"92482b3c-4f9a-485c-98b0-f8f116262b95","type":"DataRange1d"},"y_range":{"id":"3f076c7a-315c-436a-9a4f-f6a4a103df41","type":"DataRange1d"}},"id":"3ff7835f-5e9f-4408-8b7a-7ccb9941b842","type":"Plot"}],"root_ids":["3ff7835f-5e9f-4408-8b7a-7ccb9941b842"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a210d84f-dde8-4008-9316-7563a311739d","elementid":"fa9e5f23-2ff0-485a-9018-ee4e1f4f6e30","modelid":"3ff7835f-5e9f-4408-8b7a-7ccb9941b842"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

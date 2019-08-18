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
      };var element = document.getElementById("d23d2eb5-9427-4e30-8020-d09f18e98e41");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd23d2eb5-9427-4e30-8020-d09f18e98e41' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"538fdf42-f592-49e8-99b2-b7a3bf08fc7a":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5a9773e8-2932-4f93-b027-03e3bfd31442","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9845c308-48d3-45cf-92f1-793fa14c3b22","type":"Rect"},{"attributes":{},"id":"e8ec635c-4a80-4190-84e9-28e59b80c7af","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7c21e534-45f9-4931-b1b3-ea696a638eea","type":"BasicTickFormatter"},"plot":{"id":"88dc3a9a-ff3b-4865-91c2-358b5d7c3a8a","type":"Plot"},"ticker":{"id":"e8ec635c-4a80-4190-84e9-28e59b80c7af","type":"BasicTicker"}},"id":"fb76ed17-50bd-401b-833b-10d4c8023bf1","type":"LinearAxis"},{"attributes":{},"id":"69d89078-a304-4eb2-b6f4-4e6719ac5583","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"fb76ed17-50bd-401b-833b-10d4c8023bf1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fb2949db-398b-44c9-a7a9-4b1d43d5c39b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a56f849d-ff59-4f71-b50b-b042b02388cb","type":"GlyphRenderer"},{"id":"fb76ed17-50bd-401b-833b-10d4c8023bf1","type":"LinearAxis"},{"id":"fb2949db-398b-44c9-a7a9-4b1d43d5c39b","type":"LinearAxis"},{"id":"b787e160-5586-4e3d-b595-b08661403284","type":"Grid"},{"id":"1c17457a-9942-435d-abb8-6b019480b0cd","type":"Grid"}],"title":null,"tool_events":{"id":"7065b605-27ad-4a84-86c9-e26d61b552c5","type":"ToolEvents"},"toolbar":{"id":"5a9773e8-2932-4f93-b027-03e3bfd31442","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"146b0e00-7723-4230-b879-8f8cad64770f","type":"DataRange1d"},"y_range":{"id":"21eadc3d-6c26-4dd1-b143-fd56a2433141","type":"DataRange1d"}},"id":"88dc3a9a-ff3b-4865-91c2-358b5d7c3a8a","type":"Plot"},{"attributes":{"callback":null},"id":"146b0e00-7723-4230-b879-8f8cad64770f","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["w","x","h","y"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c5526abe-40cc-42db-ad43-5cf218892db6","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"88dc3a9a-ff3b-4865-91c2-358b5d7c3a8a","type":"Plot"},"ticker":{"id":"71d78ee7-62e1-4b13-9bfb-efa87b81698d","type":"BasicTicker"}},"id":"1c17457a-9942-435d-abb8-6b019480b0cd","type":"Grid"},{"attributes":{},"id":"71d78ee7-62e1-4b13-9bfb-efa87b81698d","type":"BasicTicker"},{"attributes":{},"id":"7c21e534-45f9-4931-b1b3-ea696a638eea","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"88dc3a9a-ff3b-4865-91c2-358b5d7c3a8a","type":"Plot"},"ticker":{"id":"e8ec635c-4a80-4190-84e9-28e59b80c7af","type":"BasicTicker"}},"id":"b787e160-5586-4e3d-b595-b08661403284","type":"Grid"},{"attributes":{"formatter":{"id":"69d89078-a304-4eb2-b6f4-4e6719ac5583","type":"BasicTickFormatter"},"plot":{"id":"88dc3a9a-ff3b-4865-91c2-358b5d7c3a8a","type":"Plot"},"ticker":{"id":"71d78ee7-62e1-4b13-9bfb-efa87b81698d","type":"BasicTicker"}},"id":"fb2949db-398b-44c9-a7a9-4b1d43d5c39b","type":"LinearAxis"},{"attributes":{},"id":"7065b605-27ad-4a84-86c9-e26d61b552c5","type":"ToolEvents"},{"attributes":{"data_source":{"id":"c5526abe-40cc-42db-ad43-5cf218892db6","type":"ColumnDataSource"},"glyph":{"id":"9845c308-48d3-45cf-92f1-793fa14c3b22","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"a56f849d-ff59-4f71-b50b-b042b02388cb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"21eadc3d-6c26-4dd1-b143-fd56a2433141","type":"DataRange1d"}],"root_ids":["88dc3a9a-ff3b-4865-91c2-358b5d7c3a8a"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"538fdf42-f592-49e8-99b2-b7a3bf08fc7a","elementid":"d23d2eb5-9427-4e30-8020-d09f18e98e41","modelid":"88dc3a9a-ff3b-4865-91c2-358b5d7c3a8a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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

(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("89b6e75e-ab91-4dcd-b2fc-42b4abcfefb2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '89b6e75e-ab91-4dcd-b2fc-42b4abcfefb2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"f6620364-75d1-444d-bc7e-9826b1319874":{"roots":{"references":[{"attributes":{},"id":"e69a8d3e-df5b-47d5-b645-62042874aad8","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7341593b-cd07-481b-8987-d252ac0ec4dc","type":"ColumnDataSource"},"glyph":{"id":"7e219afd-b584-4cde-afd0-37f3925dc10f","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"afd1585f-0827-4089-8031-cfc5af08b5f9","type":"CDSView"}},"id":"793d6ee6-ed07-4b70-be96-dbca4731db35","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"ea94ae7f-4dfb-473c-9444-979f480df468","type":"Plot"},"ticker":{"id":"e3fc9acc-4b60-45a7-956b-5fe1fecfba2c","type":"BasicTicker"}},"id":"83daba8e-1012-4d21-b8db-35c7cd9e166e","type":"Grid"},{"attributes":{},"id":"d75c0450-9f48-4b65-9de6-2a3788300d41","type":"LinearScale"},{"attributes":{"formatter":{"id":"913763fd-a5d3-4205-9ab4-1788daaff921","type":"BasicTickFormatter"},"plot":{"id":"ea94ae7f-4dfb-473c-9444-979f480df468","type":"Plot"},"ticker":{"id":"85cb3142-83d2-466a-98d6-498cafcb0144","type":"BasicTicker"}},"id":"23b28787-b4b3-43cd-82c8-d949c84dfd16","type":"LinearAxis"},{"attributes":{"source":{"id":"7341593b-cd07-481b-8987-d252ac0ec4dc","type":"ColumnDataSource"}},"id":"afd1585f-0827-4089-8031-cfc5af08b5f9","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"7341593b-cd07-481b-8987-d252ac0ec4dc","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e219afd-b584-4cde-afd0-37f3925dc10f","type":"Arc"},{"attributes":{"callback":null},"id":"563dce94-7466-4431-a3bb-585bafeb810b","type":"DataRange1d"},{"attributes":{"below":[{"id":"23b28787-b4b3-43cd-82c8-d949c84dfd16","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6b58fbe9-6b7a-4787-b64c-99fcd259d051","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"793d6ee6-ed07-4b70-be96-dbca4731db35","type":"GlyphRenderer"},{"id":"23b28787-b4b3-43cd-82c8-d949c84dfd16","type":"LinearAxis"},{"id":"6b58fbe9-6b7a-4787-b64c-99fcd259d051","type":"LinearAxis"},{"id":"504222af-4393-4402-ab7a-54b99b814ac5","type":"Grid"},{"id":"83daba8e-1012-4d21-b8db-35c7cd9e166e","type":"Grid"}],"title":null,"toolbar":{"id":"ff9a314d-c1d9-41b4-af97-875976d2ffcf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"bf5a21d8-22e6-41f9-bf2e-2a5b35c7739b","type":"DataRange1d"},"x_scale":{"id":"d75c0450-9f48-4b65-9de6-2a3788300d41","type":"LinearScale"},"y_range":{"id":"563dce94-7466-4431-a3bb-585bafeb810b","type":"DataRange1d"},"y_scale":{"id":"a491c471-557b-4593-9921-02c3d798d0f3","type":"LinearScale"}},"id":"ea94ae7f-4dfb-473c-9444-979f480df468","type":"Plot"},{"attributes":{"callback":null},"id":"bf5a21d8-22e6-41f9-bf2e-2a5b35c7739b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e69a8d3e-df5b-47d5-b645-62042874aad8","type":"BasicTickFormatter"},"plot":{"id":"ea94ae7f-4dfb-473c-9444-979f480df468","type":"Plot"},"ticker":{"id":"e3fc9acc-4b60-45a7-956b-5fe1fecfba2c","type":"BasicTicker"}},"id":"6b58fbe9-6b7a-4787-b64c-99fcd259d051","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ff9a314d-c1d9-41b4-af97-875976d2ffcf","type":"Toolbar"},{"attributes":{},"id":"85cb3142-83d2-466a-98d6-498cafcb0144","type":"BasicTicker"},{"attributes":{},"id":"913763fd-a5d3-4205-9ab4-1788daaff921","type":"BasicTickFormatter"},{"attributes":{},"id":"a491c471-557b-4593-9921-02c3d798d0f3","type":"LinearScale"},{"attributes":{"plot":{"id":"ea94ae7f-4dfb-473c-9444-979f480df468","type":"Plot"},"ticker":{"id":"85cb3142-83d2-466a-98d6-498cafcb0144","type":"BasicTicker"}},"id":"504222af-4393-4402-ab7a-54b99b814ac5","type":"Grid"},{"attributes":{},"id":"e3fc9acc-4b60-45a7-956b-5fe1fecfba2c","type":"BasicTicker"}],"root_ids":["ea94ae7f-4dfb-473c-9444-979f480df468"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"f6620364-75d1-444d-bc7e-9826b1319874","elementid":"89b6e75e-ab91-4dcd-b2fc-42b4abcfefb2","modelid":"ea94ae7f-4dfb-473c-9444-979f480df468"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

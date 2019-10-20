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
      };var element = document.getElementById("1353f562-000e-4f81-a8be-99a32536c956");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1353f562-000e-4f81-a8be-99a32536c956' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"cf8440b0-3111-4d30-831b-86700ecbca0e":{"roots":{"references":[{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"c6715403-ee88-43d1-a852-6cd02c68714e","type":"Quad"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6862b2bb-66ae-46bd-9615-835aef976d60","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["left","top","right","bottom"],"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"56e5ccf2-c01a-4cd0-80c9-46e59fe02eca","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c24f77ab-f249-449b-9967-2a996f126ba7","type":"DataRange1d"},{"attributes":{},"id":"1993890d-5095-4da5-b81b-03b5fb7e0189","type":"BasicTicker"},{"attributes":{},"id":"aa393409-549a-4f01-badd-413512b70e07","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d840dcf5-42be-4522-9c38-f4b306c0167e","type":"BasicTickFormatter"},"plot":{"id":"9f86e03a-ae74-455f-8b66-72da23292018","type":"Plot"},"ticker":{"id":"aa393409-549a-4f01-badd-413512b70e07","type":"BasicTicker"}},"id":"a5fb6467-1493-490d-bcc6-191862cb7867","type":"LinearAxis"},{"attributes":{"source":{"id":"56e5ccf2-c01a-4cd0-80c9-46e59fe02eca","type":"ColumnDataSource"}},"id":"4ed17dbc-9347-4fca-9dce-a681a983e844","type":"CDSView"},{"attributes":{"data_source":{"id":"56e5ccf2-c01a-4cd0-80c9-46e59fe02eca","type":"ColumnDataSource"},"glyph":{"id":"c6715403-ee88-43d1-a852-6cd02c68714e","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4ed17dbc-9347-4fca-9dce-a681a983e844","type":"CDSView"}},"id":"d88353f9-bdbf-4c10-aa66-bb53b5bdce50","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"a04c11d7-d4af-4df3-8e1b-4c5fceffedee","type":"BasicTickFormatter"},"plot":{"id":"9f86e03a-ae74-455f-8b66-72da23292018","type":"Plot"},"ticker":{"id":"1993890d-5095-4da5-b81b-03b5fb7e0189","type":"BasicTicker"}},"id":"07256d1c-3d8b-42b3-84e4-4d5a44768c9d","type":"LinearAxis"},{"attributes":{},"id":"d840dcf5-42be-4522-9c38-f4b306c0167e","type":"BasicTickFormatter"},{"attributes":{},"id":"a04c11d7-d4af-4df3-8e1b-4c5fceffedee","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9f86e03a-ae74-455f-8b66-72da23292018","type":"Plot"},"ticker":{"id":"1993890d-5095-4da5-b81b-03b5fb7e0189","type":"BasicTicker"}},"id":"85cfbb37-7529-4ae0-b8d5-7d6b38b3add8","type":"Grid"},{"attributes":{},"id":"b549e72f-f10b-4d7e-842d-b75131ab1892","type":"LinearScale"},{"attributes":{},"id":"884b9fc3-c0e3-414b-ab84-ddc27c7d545b","type":"LinearScale"},{"attributes":{"callback":null},"id":"7ac80b26-632f-4aaa-976c-9ac3d7aa05bf","type":"DataRange1d"},{"attributes":{"below":[{"id":"07256d1c-3d8b-42b3-84e4-4d5a44768c9d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a5fb6467-1493-490d-bcc6-191862cb7867","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d88353f9-bdbf-4c10-aa66-bb53b5bdce50","type":"GlyphRenderer"},{"id":"07256d1c-3d8b-42b3-84e4-4d5a44768c9d","type":"LinearAxis"},{"id":"a5fb6467-1493-490d-bcc6-191862cb7867","type":"LinearAxis"},{"id":"85cfbb37-7529-4ae0-b8d5-7d6b38b3add8","type":"Grid"},{"id":"1d438355-50e4-4aca-ac75-ff675a9777c0","type":"Grid"}],"title":null,"toolbar":{"id":"6862b2bb-66ae-46bd-9615-835aef976d60","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c24f77ab-f249-449b-9967-2a996f126ba7","type":"DataRange1d"},"x_scale":{"id":"b549e72f-f10b-4d7e-842d-b75131ab1892","type":"LinearScale"},"y_range":{"id":"7ac80b26-632f-4aaa-976c-9ac3d7aa05bf","type":"DataRange1d"},"y_scale":{"id":"884b9fc3-c0e3-414b-ab84-ddc27c7d545b","type":"LinearScale"}},"id":"9f86e03a-ae74-455f-8b66-72da23292018","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"9f86e03a-ae74-455f-8b66-72da23292018","type":"Plot"},"ticker":{"id":"aa393409-549a-4f01-badd-413512b70e07","type":"BasicTicker"}},"id":"1d438355-50e4-4aca-ac75-ff675a9777c0","type":"Grid"}],"root_ids":["9f86e03a-ae74-455f-8b66-72da23292018"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"cf8440b0-3111-4d30-831b-86700ecbca0e","elementid":"1353f562-000e-4f81-a8be-99a32536c956","modelid":"9f86e03a-ae74-455f-8b66-72da23292018"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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

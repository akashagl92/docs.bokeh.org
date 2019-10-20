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
      };var element = document.getElementById("96e33f83-de2e-498a-9182-5fbb8ed353fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '96e33f83-de2e-498a-9182-5fbb8ed353fe' but no matching script tag was found. ")
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
                    var docs_json = {"8ae00197-d79e-403c-952c-d5214102f019":{"roots":{"references":[{"attributes":{"callback":null},"id":"aa405c85-3656-4781-85b6-b529ebf2600c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9f58e73c-6945-4875-863b-5acc0142be6e","type":"Toolbar"},{"attributes":{},"id":"78e9f760-a948-4fce-a9a6-827acf41f91f","type":"BasicTicker"},{"attributes":{"below":[{"id":"928c9b22-7129-4084-8f43-cb3fcb2ab134","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4ca80323-c15e-451c-8fdf-8584dbb2997e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"633b9468-6b86-4f27-b339-38a52849a330","type":"GlyphRenderer"},{"id":"928c9b22-7129-4084-8f43-cb3fcb2ab134","type":"LinearAxis"},{"id":"4ca80323-c15e-451c-8fdf-8584dbb2997e","type":"LinearAxis"},{"id":"34543104-7ab1-4129-88de-c529680c103d","type":"Grid"},{"id":"b937bd83-d98e-4ca8-9016-6b8fe077d248","type":"Grid"}],"title":null,"toolbar":{"id":"9f58e73c-6945-4875-863b-5acc0142be6e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ed07810-559c-45ca-bc14-03beb0fbe47a","type":"DataRange1d"},"x_scale":{"id":"124a274a-96c9-470b-8401-493c615d82f5","type":"LinearScale"},"y_range":{"id":"aa405c85-3656-4781-85b6-b529ebf2600c","type":"DataRange1d"},"y_scale":{"id":"f8fa63c9-fdf0-4297-a1b2-97cdb27ce4c6","type":"LinearScale"}},"id":"5691d8f5-f852-4548-80ad-7309b2562130","type":"Plot"},{"attributes":{"callback":null},"id":"3ed07810-559c-45ca-bc14-03beb0fbe47a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3a569f8b-5c5f-47d4-bbf6-bbfdf4f3d00f","type":"ColumnDataSource"},"glyph":{"id":"92d2a6e5-280a-45a5-af49-0f0760acda50","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d974370c-984b-447d-ac10-2e1409c74104","type":"CDSView"}},"id":"633b9468-6b86-4f27-b339-38a52849a330","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"5691d8f5-f852-4548-80ad-7309b2562130","type":"Plot"},"ticker":{"id":"78e9f760-a948-4fce-a9a6-827acf41f91f","type":"BasicTicker"}},"id":"b937bd83-d98e-4ca8-9016-6b8fe077d248","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"92d2a6e5-280a-45a5-af49-0f0760acda50","type":"AnnularWedge"},{"attributes":{"plot":{"id":"5691d8f5-f852-4548-80ad-7309b2562130","type":"Plot"},"ticker":{"id":"0cfd0fa1-c31b-46ea-ad2e-aa95c3b33271","type":"BasicTicker"}},"id":"34543104-7ab1-4129-88de-c529680c103d","type":"Grid"},{"attributes":{"source":{"id":"3a569f8b-5c5f-47d4-bbf6-bbfdf4f3d00f","type":"ColumnDataSource"}},"id":"d974370c-984b-447d-ac10-2e1409c74104","type":"CDSView"},{"attributes":{},"id":"5bc284d2-108a-4842-a30b-681d392eb72a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"75a470db-a647-4bf0-8e35-1f1d7a8bad17","type":"BasicTickFormatter"},"plot":{"id":"5691d8f5-f852-4548-80ad-7309b2562130","type":"Plot"},"ticker":{"id":"78e9f760-a948-4fce-a9a6-827acf41f91f","type":"BasicTicker"}},"id":"4ca80323-c15e-451c-8fdf-8584dbb2997e","type":"LinearAxis"},{"attributes":{},"id":"f8fa63c9-fdf0-4297-a1b2-97cdb27ce4c6","type":"LinearScale"},{"attributes":{},"id":"0cfd0fa1-c31b-46ea-ad2e-aa95c3b33271","type":"BasicTicker"},{"attributes":{},"id":"75a470db-a647-4bf0-8e35-1f1d7a8bad17","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5bc284d2-108a-4842-a30b-681d392eb72a","type":"BasicTickFormatter"},"plot":{"id":"5691d8f5-f852-4548-80ad-7309b2562130","type":"Plot"},"ticker":{"id":"0cfd0fa1-c31b-46ea-ad2e-aa95c3b33271","type":"BasicTicker"}},"id":"928c9b22-7129-4084-8f43-cb3fcb2ab134","type":"LinearAxis"},{"attributes":{},"id":"124a274a-96c9-470b-8401-493c615d82f5","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","r"],"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"3a569f8b-5c5f-47d4-bbf6-bbfdf4f3d00f","type":"ColumnDataSource"}],"root_ids":["5691d8f5-f852-4548-80ad-7309b2562130"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"8ae00197-d79e-403c-952c-d5214102f019","elementid":"96e33f83-de2e-498a-9182-5fbb8ed353fe","modelid":"5691d8f5-f852-4548-80ad-7309b2562130"}];
                
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

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
      };var element = document.getElementById("b6f68feb-036d-4dac-b245-4ed46926a6b9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b6f68feb-036d-4dac-b245-4ed46926a6b9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"ac56f5e6-bd21-4bba-a0b1-665d545e9e35":{"roots":{"references":[{"attributes":{"data_source":{"id":"28381","type":"ColumnDataSource"},"glyph":{"id":"28391","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28393","type":"CDSView"}},"id":"28392","type":"GlyphRenderer"},{"attributes":{},"id":"28407","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"28381","type":"ColumnDataSource"},"glyph":{"id":"28394","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28396","type":"CDSView"}},"id":"28395","type":"GlyphRenderer"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"28388","type":"ImageURL"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"28382","type":"Range1d"},{"attributes":{"formatter":{"id":"28407","type":"BasicTickFormatter"},"plot":{"id":"28384","type":"Plot"},"ticker":{"id":"28399","type":"BasicTicker"}},"id":"28397","type":"LinearAxis"},{"attributes":{"anchor":"bottom_right","url":{"value":"https://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"28394","type":"ImageURL"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"28383","type":"Range1d"},{"attributes":{"formatter":{"id":"28409","type":"BasicTickFormatter"},"plot":{"id":"28384","type":"Plot"},"ticker":{"id":"28401","type":"BasicTicker"}},"id":"28398","type":"LinearAxis"},{"attributes":{"below":[{"id":"28397","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28398","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28389","type":"GlyphRenderer"},{"id":"28392","type":"GlyphRenderer"},{"id":"28395","type":"GlyphRenderer"},{"id":"28397","type":"LinearAxis"},{"id":"28398","type":"LinearAxis"},{"id":"28400","type":"Grid"},{"id":"28402","type":"Grid"}],"title":null,"toolbar":{"id":"28403","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28382","type":"Range1d"},"x_scale":{"id":"28404","type":"LinearScale"},"y_range":{"id":"28383","type":"Range1d"},"y_scale":{"id":"28405","type":"LinearScale"}},"id":"28384","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28403","type":"Toolbar"},{"attributes":{},"id":"28399","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}},"selected":{"id":"28411","type":"Selection"},"selection_policy":{"id":"28410","type":"UnionRenderers"}},"id":"28381","type":"ColumnDataSource"},{"attributes":{"source":{"id":"28381","type":"ColumnDataSource"}},"id":"28396","type":"CDSView"},{"attributes":{},"id":"28404","type":"LinearScale"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"28391","type":"ImageURL"},{"attributes":{},"id":"28410","type":"UnionRenderers"},{"attributes":{},"id":"28401","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"28384","type":"Plot"},"ticker":{"id":"28401","type":"BasicTicker"}},"id":"28402","type":"Grid"},{"attributes":{},"id":"28411","type":"Selection"},{"attributes":{},"id":"28409","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"28381","type":"ColumnDataSource"}},"id":"28393","type":"CDSView"},{"attributes":{"data_source":{"id":"28381","type":"ColumnDataSource"},"glyph":{"id":"28388","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28390","type":"CDSView"}},"id":"28389","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"28384","type":"Plot"},"ticker":{"id":"28399","type":"BasicTicker"}},"id":"28400","type":"Grid"},{"attributes":{"source":{"id":"28381","type":"ColumnDataSource"}},"id":"28390","type":"CDSView"},{"attributes":{},"id":"28405","type":"LinearScale"}],"root_ids":["28384"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"ac56f5e6-bd21-4bba-a0b1-665d545e9e35","roots":{"28384":"b6f68feb-036d-4dac-b245-4ed46926a6b9"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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
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
      };var element = document.getElementById("68508a78-2265-4eb7-8d21-5847c44f145f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '68508a78-2265-4eb7-8d21-5847c44f145f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"908e6d70-1ea8-4868-851b-54a29b67e25f":{"roots":{"references":[{"attributes":{"callback":null,"end":200,"start":-100},"id":"c4c008e7-b406-4084-a952-f09855685522","type":"Range1d"},{"attributes":{"source":{"id":"5bbfe15a-36b8-4005-ae5b-34c1f7c16e21","type":"ColumnDataSource"}},"id":"55633006-94c2-4bd1-bbcc-5ca11db58b12","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"5b112a9c-0bfe-4550-9f9e-5dfc4e36eb5f","type":"Plot"},"ticker":{"id":"94bde61b-ae14-4aaf-a9cf-724516f12971","type":"BasicTicker"}},"id":"16235d67-7079-49f8-82ad-117a875893bd","type":"Grid"},{"attributes":{},"id":"94bde61b-ae14-4aaf-a9cf-724516f12971","type":"BasicTicker"},{"attributes":{},"id":"1b6562ab-a88a-4051-a49e-328dd7263120","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"5bbfe15a-36b8-4005-ae5b-34c1f7c16e21","type":"ColumnDataSource"}},"id":"dd40ce7f-3477-4d7f-bdfd-df2c4251a702","type":"CDSView"},{"attributes":{"data_source":{"id":"5bbfe15a-36b8-4005-ae5b-34c1f7c16e21","type":"ColumnDataSource"},"glyph":{"id":"918a9ec0-36ac-4d9d-aa28-05c6a69d2c48","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29a7653c-d36f-4612-a91d-03f65cc768ef","type":"CDSView"}},"id":"0c85b39f-d15c-46af-9e24-c7ab29152b6c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1b6562ab-a88a-4051-a49e-328dd7263120","type":"BasicTickFormatter"},"plot":{"id":"5b112a9c-0bfe-4550-9f9e-5dfc4e36eb5f","type":"Plot"},"ticker":{"id":"94bde61b-ae14-4aaf-a9cf-724516f12971","type":"BasicTicker"}},"id":"5e864940-731b-4cbe-a623-2ab2a0e2281f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5bbfe15a-36b8-4005-ae5b-34c1f7c16e21","type":"ColumnDataSource"},"glyph":{"id":"1b2e0e53-65e4-4786-ac85-a0009cb1971a","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"55633006-94c2-4bd1-bbcc-5ca11db58b12","type":"CDSView"}},"id":"fe59b551-8fef-4c77-b53a-03845326b7bb","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e9c6b891-daba-4145-80e4-5ba6f0b2c30d","type":"Toolbar"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"918a9ec0-36ac-4d9d-aa28-05c6a69d2c48","type":"ImageURL"},{"attributes":{},"id":"58b202a6-38a8-476f-8e41-066b71505d2f","type":"LinearScale"},{"attributes":{},"id":"eff8a7b8-c925-400d-9e8a-b1a978275164","type":"BasicTicker"},{"attributes":{"anchor":"bottom_right","url":{"value":"https://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"4dfb7c8b-0455-4c95-a2c2-9679af20fce5","type":"ImageURL"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"dcb671c2-d00d-4759-9fdb-07b044a1805a","type":"Range1d"},{"attributes":{"plot":{"id":"5b112a9c-0bfe-4550-9f9e-5dfc4e36eb5f","type":"Plot"},"ticker":{"id":"eff8a7b8-c925-400d-9e8a-b1a978275164","type":"BasicTicker"}},"id":"4838a6fa-f9e0-4179-8294-39a73c402209","type":"Grid"},{"attributes":{},"id":"0a7b8d21-53ff-4786-b8bb-0f1f92ac3928","type":"Selection"},{"attributes":{},"id":"7f9c7f5d-a759-4443-9c9b-cc319f622b6d","type":"UnionRenderers"},{"attributes":{"below":[{"id":"b120f1d4-c82d-44f2-a8ba-a893d0c33891","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5e864940-731b-4cbe-a623-2ab2a0e2281f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0c85b39f-d15c-46af-9e24-c7ab29152b6c","type":"GlyphRenderer"},{"id":"fe59b551-8fef-4c77-b53a-03845326b7bb","type":"GlyphRenderer"},{"id":"f2626616-53ce-4eb4-995e-19e04e0e6e6d","type":"GlyphRenderer"},{"id":"b120f1d4-c82d-44f2-a8ba-a893d0c33891","type":"LinearAxis"},{"id":"5e864940-731b-4cbe-a623-2ab2a0e2281f","type":"LinearAxis"},{"id":"4838a6fa-f9e0-4179-8294-39a73c402209","type":"Grid"},{"id":"16235d67-7079-49f8-82ad-117a875893bd","type":"Grid"}],"title":null,"toolbar":{"id":"e9c6b891-daba-4145-80e4-5ba6f0b2c30d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c4c008e7-b406-4084-a952-f09855685522","type":"Range1d"},"x_scale":{"id":"58b202a6-38a8-476f-8e41-066b71505d2f","type":"LinearScale"},"y_range":{"id":"dcb671c2-d00d-4759-9fdb-07b044a1805a","type":"Range1d"},"y_scale":{"id":"6fea7d5a-1aa0-4c64-bc58-1cb1314a1643","type":"LinearScale"}},"id":"5b112a9c-0bfe-4550-9f9e-5dfc4e36eb5f","type":"Plot"},{"attributes":{"source":{"id":"5bbfe15a-36b8-4005-ae5b-34c1f7c16e21","type":"ColumnDataSource"}},"id":"29a7653c-d36f-4612-a91d-03f65cc768ef","type":"CDSView"},{"attributes":{},"id":"6fea7d5a-1aa0-4c64-bc58-1cb1314a1643","type":"LinearScale"},{"attributes":{"formatter":{"id":"35209b2e-9879-4586-8b3a-b8e640a7d3d2","type":"BasicTickFormatter"},"plot":{"id":"5b112a9c-0bfe-4550-9f9e-5dfc4e36eb5f","type":"Plot"},"ticker":{"id":"eff8a7b8-c925-400d-9e8a-b1a978275164","type":"BasicTicker"}},"id":"b120f1d4-c82d-44f2-a8ba-a893d0c33891","type":"LinearAxis"},{"attributes":{},"id":"35209b2e-9879-4586-8b3a-b8e640a7d3d2","type":"BasicTickFormatter"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"1b2e0e53-65e4-4786-ac85-a0009cb1971a","type":"ImageURL"},{"attributes":{"callback":null,"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}},"selected":{"id":"0a7b8d21-53ff-4786-b8bb-0f1f92ac3928","type":"Selection"},"selection_policy":{"id":"7f9c7f5d-a759-4443-9c9b-cc319f622b6d","type":"UnionRenderers"}},"id":"5bbfe15a-36b8-4005-ae5b-34c1f7c16e21","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5bbfe15a-36b8-4005-ae5b-34c1f7c16e21","type":"ColumnDataSource"},"glyph":{"id":"4dfb7c8b-0455-4c95-a2c2-9679af20fce5","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"dd40ce7f-3477-4d7f-bdfd-df2c4251a702","type":"CDSView"}},"id":"f2626616-53ce-4eb4-995e-19e04e0e6e6d","type":"GlyphRenderer"}],"root_ids":["5b112a9c-0bfe-4550-9f9e-5dfc4e36eb5f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"908e6d70-1ea8-4868-851b-54a29b67e25f","roots":{"5b112a9c-0bfe-4550-9f9e-5dfc4e36eb5f":"68508a78-2265-4eb7-8d21-5847c44f145f"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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
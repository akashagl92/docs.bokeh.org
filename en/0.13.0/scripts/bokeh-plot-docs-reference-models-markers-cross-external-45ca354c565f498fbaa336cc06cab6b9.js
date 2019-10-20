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
      };var element = document.getElementById("a6ea47f7-224a-4389-91d8-492a3b78bd2c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a6ea47f7-224a-4389-91d8-492a3b78bd2c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e5591e50-58c0-4b2a-8733-1e08a90e5cf7":{"roots":{"references":[{"attributes":{"plot":{"id":"cf2ae981-f479-41b9-96d4-6890c22cc461","type":"Plot"},"ticker":{"id":"8f7849bd-f354-4042-8401-686a52cc5acf","type":"BasicTicker"}},"id":"45956236-6814-473e-b55d-c46c19c81af7","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"cf2ae981-f479-41b9-96d4-6890c22cc461","type":"Plot"},"ticker":{"id":"46ac8cde-3f6c-4c43-9a67-e1a4186bbaab","type":"BasicTicker"}},"id":"6bd90504-db4c-40b4-82de-5e73e3059201","type":"Grid"},{"attributes":{},"id":"8b4de06a-9adc-48e0-8cca-b72d82f1111e","type":"UnionRenderers"},{"attributes":{},"id":"1a831740-cea9-4255-b85d-3ac8155b4636","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"457851c7-3bfa-4608-9a61-b0bad440c4f8","type":"Cross"},{"attributes":{"source":{"id":"4036428e-e868-4151-b267-2acbfff2b4a3","type":"ColumnDataSource"}},"id":"2f96de1d-1808-48f1-8118-3ef5520635da","type":"CDSView"},{"attributes":{},"id":"8f7849bd-f354-4042-8401-686a52cc5acf","type":"BasicTicker"},{"attributes":{},"id":"b5db3205-c6c9-449b-8c43-6bc57e053470","type":"LinearScale"},{"attributes":{},"id":"58821926-9132-4e7d-920d-fbc714b867d8","type":"LinearScale"},{"attributes":{"formatter":{"id":"5b7d8ed4-986c-4c09-8f7a-715bfd261a96","type":"BasicTickFormatter"},"plot":{"id":"cf2ae981-f479-41b9-96d4-6890c22cc461","type":"Plot"},"ticker":{"id":"8f7849bd-f354-4042-8401-686a52cc5acf","type":"BasicTicker"}},"id":"f3251710-61ab-427b-ac21-32c1e6ced34b","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1a831740-cea9-4255-b85d-3ac8155b4636","type":"BasicTickFormatter"},"plot":{"id":"cf2ae981-f479-41b9-96d4-6890c22cc461","type":"Plot"},"ticker":{"id":"46ac8cde-3f6c-4c43-9a67-e1a4186bbaab","type":"BasicTicker"}},"id":"2d530159-0203-40a0-a065-9343cd36d0fe","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"12e09072-d1eb-499f-9437-f18b16988f9e","type":"Toolbar"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"b41ba2b9-b0cf-4672-8c6f-f07dfd3ed086","type":"Selection"},"selection_policy":{"id":"8b4de06a-9adc-48e0-8cca-b72d82f1111e","type":"UnionRenderers"}},"id":"4036428e-e868-4151-b267-2acbfff2b4a3","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9d27f797-ba7e-4e9a-bea2-43e9a71fd7ad","type":"DataRange1d"},{"attributes":{},"id":"46ac8cde-3f6c-4c43-9a67-e1a4186bbaab","type":"BasicTicker"},{"attributes":{"below":[{"id":"f3251710-61ab-427b-ac21-32c1e6ced34b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2d530159-0203-40a0-a065-9343cd36d0fe","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"bb4461d9-7ef0-4150-94d7-d0c681214e6f","type":"GlyphRenderer"},{"id":"f3251710-61ab-427b-ac21-32c1e6ced34b","type":"LinearAxis"},{"id":"2d530159-0203-40a0-a065-9343cd36d0fe","type":"LinearAxis"},{"id":"45956236-6814-473e-b55d-c46c19c81af7","type":"Grid"},{"id":"6bd90504-db4c-40b4-82de-5e73e3059201","type":"Grid"}],"title":null,"toolbar":{"id":"12e09072-d1eb-499f-9437-f18b16988f9e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1f86b4cd-4ee5-4388-9a2e-16fea8722ad7","type":"DataRange1d"},"x_scale":{"id":"b5db3205-c6c9-449b-8c43-6bc57e053470","type":"LinearScale"},"y_range":{"id":"9d27f797-ba7e-4e9a-bea2-43e9a71fd7ad","type":"DataRange1d"},"y_scale":{"id":"58821926-9132-4e7d-920d-fbc714b867d8","type":"LinearScale"}},"id":"cf2ae981-f479-41b9-96d4-6890c22cc461","type":"Plot"},{"attributes":{"data_source":{"id":"4036428e-e868-4151-b267-2acbfff2b4a3","type":"ColumnDataSource"},"glyph":{"id":"457851c7-3bfa-4608-9a61-b0bad440c4f8","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2f96de1d-1808-48f1-8118-3ef5520635da","type":"CDSView"}},"id":"bb4461d9-7ef0-4150-94d7-d0c681214e6f","type":"GlyphRenderer"},{"attributes":{},"id":"5b7d8ed4-986c-4c09-8f7a-715bfd261a96","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1f86b4cd-4ee5-4388-9a2e-16fea8722ad7","type":"DataRange1d"},{"attributes":{},"id":"b41ba2b9-b0cf-4672-8c6f-f07dfd3ed086","type":"Selection"}],"root_ids":["cf2ae981-f479-41b9-96d4-6890c22cc461"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e5591e50-58c0-4b2a-8733-1e08a90e5cf7","roots":{"cf2ae981-f479-41b9-96d4-6890c22cc461":"a6ea47f7-224a-4389-91d8-492a3b78bd2c"}}];
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
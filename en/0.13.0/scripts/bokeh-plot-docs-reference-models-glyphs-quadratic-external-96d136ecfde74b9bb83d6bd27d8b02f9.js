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
      };var element = document.getElementById("c6233e78-f471-4d24-85d0-5229d0dd201f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6233e78-f471-4d24-85d0-5229d0dd201f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c4341bb1-4d0b-44c6-9a4b-b4021cc68b87":{"roots":{"references":[{"attributes":{"formatter":{"id":"d2dda19d-403e-4c61-8d18-a8ffe6de4dc6","type":"BasicTickFormatter"},"plot":{"id":"2a7d8e8a-9a9f-49f0-be4d-14f52a994572","type":"Plot"},"ticker":{"id":"ebd347da-a4b1-456b-b564-a677edd708ec","type":"BasicTicker"}},"id":"e966b0f9-eb25-49f4-b14c-e10e49e1dcda","type":"LinearAxis"},{"attributes":{},"id":"e46b11f2-20ef-4753-960d-99ae6af9c383","type":"BasicTicker"},{"attributes":{},"id":"d2dda19d-403e-4c61-8d18-a8ffe6de4dc6","type":"BasicTickFormatter"},{"attributes":{},"id":"377de27c-6aaa-4a2a-9e61-6585342d2016","type":"Selection"},{"attributes":{},"id":"eb0b2e50-ebeb-47ff-8ab6-efd24266e059","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"45f407ee-bea0-45b3-bd53-d7391367738e","type":"Toolbar"},{"attributes":{},"id":"0d0ed53c-c48c-41e8-b1e0-279af3cd0564","type":"UnionRenderers"},{"attributes":{},"id":"183be807-db29-45b6-a5e4-ec21972b0141","type":"LinearScale"},{"attributes":{},"id":"ebd347da-a4b1-456b-b564-a677edd708ec","type":"BasicTicker"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4daf4a"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"4a66c6bd-d3b9-4d57-93dd-352641962fb8","type":"Quadratic"},{"attributes":{"source":{"id":"2cb9c578-1895-4b62-917e-7ff87ac7bc7c","type":"ColumnDataSource"}},"id":"ee9ee9f2-24f1-4a31-af28-4023c66889e2","type":"CDSView"},{"attributes":{"data_source":{"id":"2cb9c578-1895-4b62-917e-7ff87ac7bc7c","type":"ColumnDataSource"},"glyph":{"id":"4a66c6bd-d3b9-4d57-93dd-352641962fb8","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ee9ee9f2-24f1-4a31-af28-4023c66889e2","type":"CDSView"}},"id":"712d7628-2c67-474c-bb0b-bae7a1d3f59e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2521452d-5d5e-4c38-ba72-4c46d0c028de","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"2a7d8e8a-9a9f-49f0-be4d-14f52a994572","type":"Plot"},"ticker":{"id":"ebd347da-a4b1-456b-b564-a677edd708ec","type":"BasicTicker"}},"id":"10cdc229-f238-4254-a25e-c51b73351c68","type":"Grid"},{"attributes":{"callback":null},"id":"4e6f789f-b69d-47a5-a00e-09bd5f93a49d","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}},"selected":{"id":"377de27c-6aaa-4a2a-9e61-6585342d2016","type":"Selection"},"selection_policy":{"id":"0d0ed53c-c48c-41e8-b1e0-279af3cd0564","type":"UnionRenderers"}},"id":"2cb9c578-1895-4b62-917e-7ff87ac7bc7c","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"26df3714-3007-444e-90e9-55c3a2f90fe7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e966b0f9-eb25-49f4-b14c-e10e49e1dcda","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"712d7628-2c67-474c-bb0b-bae7a1d3f59e","type":"GlyphRenderer"},{"id":"26df3714-3007-444e-90e9-55c3a2f90fe7","type":"LinearAxis"},{"id":"e966b0f9-eb25-49f4-b14c-e10e49e1dcda","type":"LinearAxis"},{"id":"bb5241f2-cec1-45c4-89c8-948f8e77241f","type":"Grid"},{"id":"10cdc229-f238-4254-a25e-c51b73351c68","type":"Grid"}],"title":null,"toolbar":{"id":"45f407ee-bea0-45b3-bd53-d7391367738e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2521452d-5d5e-4c38-ba72-4c46d0c028de","type":"DataRange1d"},"x_scale":{"id":"eb0b2e50-ebeb-47ff-8ab6-efd24266e059","type":"LinearScale"},"y_range":{"id":"4e6f789f-b69d-47a5-a00e-09bd5f93a49d","type":"DataRange1d"},"y_scale":{"id":"183be807-db29-45b6-a5e4-ec21972b0141","type":"LinearScale"}},"id":"2a7d8e8a-9a9f-49f0-be4d-14f52a994572","type":"Plot"},{"attributes":{"formatter":{"id":"08bf198a-888e-49c0-9553-26d47e4166b3","type":"BasicTickFormatter"},"plot":{"id":"2a7d8e8a-9a9f-49f0-be4d-14f52a994572","type":"Plot"},"ticker":{"id":"e46b11f2-20ef-4753-960d-99ae6af9c383","type":"BasicTicker"}},"id":"26df3714-3007-444e-90e9-55c3a2f90fe7","type":"LinearAxis"},{"attributes":{"plot":{"id":"2a7d8e8a-9a9f-49f0-be4d-14f52a994572","type":"Plot"},"ticker":{"id":"e46b11f2-20ef-4753-960d-99ae6af9c383","type":"BasicTicker"}},"id":"bb5241f2-cec1-45c4-89c8-948f8e77241f","type":"Grid"},{"attributes":{},"id":"08bf198a-888e-49c0-9553-26d47e4166b3","type":"BasicTickFormatter"}],"root_ids":["2a7d8e8a-9a9f-49f0-be4d-14f52a994572"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c4341bb1-4d0b-44c6-9a4b-b4021cc68b87","roots":{"2a7d8e8a-9a9f-49f0-be4d-14f52a994572":"c6233e78-f471-4d24-85d0-5229d0dd201f"}}];
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
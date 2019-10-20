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
      };var element = document.getElementById("a70358f8-467a-42ef-87d1-392c7e2fb173");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a70358f8-467a-42ef-87d1-392c7e2fb173' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"634d98b0-d6bd-4570-8480-4f56078fdc7f":{"roots":{"references":[{"attributes":{"callback":null},"id":"2eef5775-f6a9-43c1-b10b-82daa8233637","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2c37bcd3-a971-41ce-be16-253ecc04c71a","type":"BoxAnnotation"}},"id":"2299e8d7-a6ec-4a0d-811e-86d96d76b640","type":"BoxZoomTool"},{"attributes":{},"id":"39930602-14b3-4962-9300-7b0f972b0c86","type":"UnionRenderers"},{"attributes":{},"id":"7e1cca19-d5c1-45b4-b48a-23b9e622eabe","type":"BasicTicker"},{"attributes":{},"id":"a66f6d9e-c82f-4238-b0cf-1a41f908d4ba","type":"LinearScale"},{"attributes":{},"id":"ba43df7c-1bbb-4a07-951f-031f08bd954a","type":"LinearScale"},{"attributes":{},"id":"7e1d419a-3328-4bbb-80d6-bba7f485cd5d","type":"BasicTickFormatter"},{"attributes":{},"id":"ad8893a4-7a01-4afa-bb2a-9b415408646a","type":"HelpTool"},{"attributes":{"plot":{"id":"75844fa9-1e10-44be-9e7a-865ef22634f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e1cca19-d5c1-45b4-b48a-23b9e622eabe","type":"BasicTicker"}},"id":"edc968f4-d22b-4412-a9de-0fb2abffdc42","type":"Grid"},{"attributes":{"formatter":{"id":"7e1d419a-3328-4bbb-80d6-bba7f485cd5d","type":"BasicTickFormatter"},"plot":{"id":"75844fa9-1e10-44be-9e7a-865ef22634f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e021579b-c80c-4853-92a0-964cd84878f4","type":"BasicTicker"}},"id":"cc7a3b37-5d37-4410-a3cd-3c97523bed39","type":"LinearAxis"},{"attributes":{},"id":"e021579b-c80c-4853-92a0-964cd84878f4","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"75844fa9-1e10-44be-9e7a-865ef22634f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e021579b-c80c-4853-92a0-964cd84878f4","type":"BasicTicker"}},"id":"f0f4556e-6f56-4694-81ca-a4f61ac9b3c4","type":"Grid"},{"attributes":{},"id":"4e62e0dc-7776-4f83-a8a8-f7a0f97124f4","type":"SaveTool"},{"attributes":{},"id":"afd84ecb-8cd5-4f6a-bb27-5cd8527fd5c4","type":"BasicTickFormatter"},{"attributes":{},"id":"45bcac09-b078-4ab2-9658-02573634654e","type":"ResetTool"},{"attributes":{"data_source":{"id":"a4026666-852b-428e-891c-84166c54d634","type":"ColumnDataSource"},"glyph":{"id":"fbbcdb0b-339b-4d5e-9340-f10f6f5f205d","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1e3711aa-4fe0-4a89-8be1-c797e42af3cd","type":"MultiLine"},"selection_glyph":null,"view":{"id":"7b70564b-9064-483c-affc-5f608f178560","type":"CDSView"}},"id":"65f4577c-8ee9-40de-a3c3-d27824586bab","type":"GlyphRenderer"},{"attributes":{},"id":"61bd94df-0e6e-4852-bef4-86717a7b65bd","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"4697098b-f486-4302-8313-8c7400b8f65a","type":"Title"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"fbbcdb0b-339b-4d5e-9340-f10f6f5f205d","type":"MultiLine"},{"attributes":{"below":[{"id":"4452ffc3-e1dd-4be0-ae53-64279dc9be1d","type":"LinearAxis"}],"left":[{"id":"cc7a3b37-5d37-4410-a3cd-3c97523bed39","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4452ffc3-e1dd-4be0-ae53-64279dc9be1d","type":"LinearAxis"},{"id":"edc968f4-d22b-4412-a9de-0fb2abffdc42","type":"Grid"},{"id":"cc7a3b37-5d37-4410-a3cd-3c97523bed39","type":"LinearAxis"},{"id":"f0f4556e-6f56-4694-81ca-a4f61ac9b3c4","type":"Grid"},{"id":"2c37bcd3-a971-41ce-be16-253ecc04c71a","type":"BoxAnnotation"},{"id":"65f4577c-8ee9-40de-a3c3-d27824586bab","type":"GlyphRenderer"}],"title":{"id":"4697098b-f486-4302-8313-8c7400b8f65a","type":"Title"},"toolbar":{"id":"d3016bcb-fa7c-49af-8bdd-74039cd6c3ce","type":"Toolbar"},"x_range":{"id":"ec310f37-bfe7-4bda-ba58-6edfe8966073","type":"DataRange1d"},"x_scale":{"id":"a66f6d9e-c82f-4238-b0cf-1a41f908d4ba","type":"LinearScale"},"y_range":{"id":"2eef5775-f6a9-43c1-b10b-82daa8233637","type":"DataRange1d"},"y_scale":{"id":"ba43df7c-1bbb-4a07-951f-031f08bd954a","type":"LinearScale"}},"id":"75844fa9-1e10-44be-9e7a-865ef22634f7","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"1e3711aa-4fe0-4a89-8be1-c797e42af3cd","type":"MultiLine"},{"attributes":{},"id":"2f48ba49-388e-40c0-a774-dd4d0ff66556","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"aa349da2-967f-459d-b825-e019998beddb","type":"PanTool"},{"id":"2f48ba49-388e-40c0-a774-dd4d0ff66556","type":"WheelZoomTool"},{"id":"2299e8d7-a6ec-4a0d-811e-86d96d76b640","type":"BoxZoomTool"},{"id":"4e62e0dc-7776-4f83-a8a8-f7a0f97124f4","type":"SaveTool"},{"id":"45bcac09-b078-4ab2-9658-02573634654e","type":"ResetTool"},{"id":"ad8893a4-7a01-4afa-bb2a-9b415408646a","type":"HelpTool"}]},"id":"d3016bcb-fa7c-49af-8bdd-74039cd6c3ce","type":"Toolbar"},{"attributes":{"callback":null},"id":"ec310f37-bfe7-4bda-ba58-6edfe8966073","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]},"selected":{"id":"61bd94df-0e6e-4852-bef4-86717a7b65bd","type":"Selection"},"selection_policy":{"id":"39930602-14b3-4962-9300-7b0f972b0c86","type":"UnionRenderers"}},"id":"a4026666-852b-428e-891c-84166c54d634","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2c37bcd3-a971-41ce-be16-253ecc04c71a","type":"BoxAnnotation"},{"attributes":{},"id":"aa349da2-967f-459d-b825-e019998beddb","type":"PanTool"},{"attributes":{"source":{"id":"a4026666-852b-428e-891c-84166c54d634","type":"ColumnDataSource"}},"id":"7b70564b-9064-483c-affc-5f608f178560","type":"CDSView"},{"attributes":{"formatter":{"id":"afd84ecb-8cd5-4f6a-bb27-5cd8527fd5c4","type":"BasicTickFormatter"},"plot":{"id":"75844fa9-1e10-44be-9e7a-865ef22634f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e1cca19-d5c1-45b4-b48a-23b9e622eabe","type":"BasicTicker"}},"id":"4452ffc3-e1dd-4be0-ae53-64279dc9be1d","type":"LinearAxis"}],"root_ids":["75844fa9-1e10-44be-9e7a-865ef22634f7"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"634d98b0-d6bd-4570-8480-4f56078fdc7f","roots":{"75844fa9-1e10-44be-9e7a-865ef22634f7":"a70358f8-467a-42ef-87d1-392c7e2fb173"}}];
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
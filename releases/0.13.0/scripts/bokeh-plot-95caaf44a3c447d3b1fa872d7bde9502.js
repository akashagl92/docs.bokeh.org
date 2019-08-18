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
      };var element = document.getElementById("56d79445-8033-4ebc-a422-4992495260af");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '56d79445-8033-4ebc-a422-4992495260af' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1bc530af-43ae-4eb6-932f-6539227e460a":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"af52f53d-c79e-47f0-b663-c01847746adc","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"2af44244-21ce-43ca-95df-23ffe7625182","type":"Circle"},{"attributes":{},"id":"1bf9ded2-16e0-475a-b55b-babde33fff93","type":"PanTool"},{"attributes":{"plot":{"id":"a6c5a208-0471-44d3-84f2-98372e5e0be3","subtype":"Figure","type":"Plot"},"ticker":{"id":"93b628e0-df20-4d04-8e1b-242570bb944b","type":"BasicTicker"}},"id":"20682762-bcef-4e3c-80f5-97c7390b6877","type":"Grid"},{"attributes":{},"id":"47a26208-4e80-4cdc-a1cb-c04b570bdf0a","type":"UnionRenderers"},{"attributes":{},"id":"925bc895-1bdb-4e23-8fb0-9aae5b787d83","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1bf9ded2-16e0-475a-b55b-babde33fff93","type":"PanTool"},{"id":"063d8f88-b5ca-4fac-b889-a4fc8ceef0eb","type":"WheelZoomTool"},{"id":"005457eb-362a-4fa6-991b-e00ef242cb95","type":"BoxZoomTool"},{"id":"b05e3327-7c68-418d-9474-f7ec655f535e","type":"SaveTool"},{"id":"4e715514-b142-44b8-87f8-6f48eee3e847","type":"ResetTool"},{"id":"6ef9db35-5f0c-4fe1-8885-bb40f933d6f8","type":"HelpTool"}]},"id":"58e2ea7d-4772-4f2b-a8c5-9660bf5580ef","type":"Toolbar"},{"attributes":{},"id":"e710e93d-c12e-4422-9f87-51c1197a4fdd","type":"Selection"},{"attributes":{},"id":"b05e3327-7c68-418d-9474-f7ec655f535e","type":"SaveTool"},{"attributes":{"formatter":{"id":"925bc895-1bdb-4e23-8fb0-9aae5b787d83","type":"BasicTickFormatter"},"plot":{"id":"a6c5a208-0471-44d3-84f2-98372e5e0be3","subtype":"Figure","type":"Plot"},"ticker":{"id":"93b628e0-df20-4d04-8e1b-242570bb944b","type":"BasicTicker"}},"id":"d69b04ec-0b7f-463c-981c-d8cae8fe5972","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"db31fb0a-4ffd-4498-8d0e-1cf4bf42b02a","type":"FactorRange"},{"attributes":{"overlay":{"id":"af52f53d-c79e-47f0-b663-c01847746adc","type":"BoxAnnotation"}},"id":"005457eb-362a-4fa6-991b-e00ef242cb95","type":"BoxZoomTool"},{"attributes":{},"id":"4e715514-b142-44b8-87f8-6f48eee3e847","type":"ResetTool"},{"attributes":{},"id":"93b628e0-df20-4d04-8e1b-242570bb944b","type":"BasicTicker"},{"attributes":{},"id":"3d6fa7db-c616-4496-85ec-5cb062173c96","type":"CategoricalTickFormatter"},{"attributes":{"callback":null},"id":"0c053d47-e92e-4a4e-b85a-869ce45efd30","type":"DataRange1d"},{"attributes":{},"id":"e5e0c6e0-0b35-41ad-850b-a4cf9e72f6a0","type":"CategoricalTicker"},{"attributes":{},"id":"063d8f88-b5ca-4fac-b889-a4fc8ceef0eb","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"e710e93d-c12e-4422-9f87-51c1197a4fdd","type":"Selection"},"selection_policy":{"id":"47a26208-4e80-4cdc-a1cb-c04b570bdf0a","type":"UnionRenderers"}},"id":"cefefbf4-b1bf-4f60-a8fd-4e3a55366351","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"d69b04ec-0b7f-463c-981c-d8cae8fe5972","type":"LinearAxis"}],"left":[{"id":"69faafa8-dede-4dcd-b4bf-a0cbe65f8318","type":"CategoricalAxis"}],"renderers":[{"id":"d69b04ec-0b7f-463c-981c-d8cae8fe5972","type":"LinearAxis"},{"id":"20682762-bcef-4e3c-80f5-97c7390b6877","type":"Grid"},{"id":"69faafa8-dede-4dcd-b4bf-a0cbe65f8318","type":"CategoricalAxis"},{"id":"a5a5c154-fdb2-438c-8b8b-7e0211349692","type":"Grid"},{"id":"af52f53d-c79e-47f0-b663-c01847746adc","type":"BoxAnnotation"},{"id":"d473add3-932c-4b7f-a80e-af97cd0d0cec","type":"GlyphRenderer"}],"title":{"id":"d6c3ef7f-24de-4899-ba20-00f492a08633","type":"Title"},"toolbar":{"id":"58e2ea7d-4772-4f2b-a8c5-9660bf5580ef","type":"Toolbar"},"x_range":{"id":"0c053d47-e92e-4a4e-b85a-869ce45efd30","type":"DataRange1d"},"x_scale":{"id":"d7db3a1d-3a17-4846-8a9c-882b9024e0f2","type":"LinearScale"},"y_range":{"id":"db31fb0a-4ffd-4498-8d0e-1cf4bf42b02a","type":"FactorRange"},"y_scale":{"id":"8e6bd21a-02c3-41c1-bffd-718c468e877e","type":"CategoricalScale"}},"id":"a6c5a208-0471-44d3-84f2-98372e5e0be3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6ef9db35-5f0c-4fe1-8885-bb40f933d6f8","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"a6c5a208-0471-44d3-84f2-98372e5e0be3","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5e0c6e0-0b35-41ad-850b-a4cf9e72f6a0","type":"CategoricalTicker"}},"id":"a5a5c154-fdb2-438c-8b8b-7e0211349692","type":"Grid"},{"attributes":{"data_source":{"id":"cefefbf4-b1bf-4f60-a8fd-4e3a55366351","type":"ColumnDataSource"},"glyph":{"id":"4bc6a2bd-375a-43cf-9fb0-c85e67aa17a1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2af44244-21ce-43ca-95df-23ffe7625182","type":"Circle"},"selection_glyph":null,"view":{"id":"09f6b06f-7cc1-4627-8ccb-14055ddae30d","type":"CDSView"}},"id":"d473add3-932c-4b7f-a80e-af97cd0d0cec","type":"GlyphRenderer"},{"attributes":{"source":{"id":"cefefbf4-b1bf-4f60-a8fd-4e3a55366351","type":"ColumnDataSource"}},"id":"09f6b06f-7cc1-4627-8ccb-14055ddae30d","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"d6c3ef7f-24de-4899-ba20-00f492a08633","type":"Title"},{"attributes":{},"id":"8e6bd21a-02c3-41c1-bffd-718c468e877e","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"3d6fa7db-c616-4496-85ec-5cb062173c96","type":"CategoricalTickFormatter"},"plot":{"id":"a6c5a208-0471-44d3-84f2-98372e5e0be3","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5e0c6e0-0b35-41ad-850b-a4cf9e72f6a0","type":"CategoricalTicker"}},"id":"69faafa8-dede-4dcd-b4bf-a0cbe65f8318","type":"CategoricalAxis"},{"attributes":{},"id":"d7db3a1d-3a17-4846-8a9c-882b9024e0f2","type":"LinearScale"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"4bc6a2bd-375a-43cf-9fb0-c85e67aa17a1","type":"Circle"}],"root_ids":["a6c5a208-0471-44d3-84f2-98372e5e0be3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"1bc530af-43ae-4eb6-932f-6539227e460a","roots":{"a6c5a208-0471-44d3-84f2-98372e5e0be3":"56d79445-8033-4ebc-a422-4992495260af"}}];
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
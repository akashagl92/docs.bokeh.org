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
      };var element = document.getElementById("319eb2cb-2327-455c-8011-3709c99ae7e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '319eb2cb-2327-455c-8011-3709c99ae7e1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b7f990db-f063-4a9b-98b1-3c6629e620f1":{"roots":{"references":[{"attributes":{},"id":"24e24fcf-973d-45de-a5d8-2e9979fa4864","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"08567042-bee4-45e1-b6ac-4c14c3126941","type":"BoxAnnotation"},{"attributes":{},"id":"2d9a39a5-4693-4afd-b9c6-34fc1182d0fb","type":"BasicTickFormatter"},{"attributes":{},"id":"7e1eea0f-ef78-45a8-b380-c4b53c6e52e2","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7e1eea0f-ef78-45a8-b380-c4b53c6e52e2","type":"PanTool"},{"id":"8ee056a2-add0-4c46-8530-0dc7b1643c15","type":"WheelZoomTool"},{"id":"cd74002d-9810-42d5-95d2-f086c5bba8c2","type":"BoxZoomTool"},{"id":"12927959-dd34-4d36-9589-9002d9f7a448","type":"SaveTool"},{"id":"70cd9c18-52cd-4baa-a083-22fe13825974","type":"ResetTool"},{"id":"29275882-5743-4c71-9e95-7d85da852adc","type":"HelpTool"}]},"id":"43c1df2d-3e8d-4221-9433-9d74b33a3c16","type":"Toolbar"},{"attributes":{},"id":"e24db478-26ed-4b44-a609-04aad439f590","type":"LinearScale"},{"attributes":{},"id":"d6cd7ab1-3f93-48e2-a1b9-016375735966","type":"Selection"},{"attributes":{},"id":"12927959-dd34-4d36-9589-9002d9f7a448","type":"SaveTool"},{"attributes":{"plot":{"id":"3124bf7b-f620-4e20-b206-4419e010a4ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7b318b3-41fb-4922-b8e1-640c65098d94","type":"BasicTicker"}},"id":"86c2bdc4-753b-4b84-83cc-6e167e9fcd82","type":"Grid"},{"attributes":{},"id":"70cd9c18-52cd-4baa-a083-22fe13825974","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"eb29fab3-0451-4bb3-80be-af3157055070","type":"Title"},{"attributes":{"data_source":{"id":"f187211e-6f8f-4eef-a127-39c6ede247de","type":"ColumnDataSource"},"glyph":{"id":"be407300-a1aa-46da-b4e2-54c620d763ab","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d51361a3-240f-40c7-be29-69cda749a567","type":"Cross"},"selection_glyph":null,"view":{"id":"c5aaffa7-69a6-4ec7-9dc8-99ba25030d25","type":"CDSView"}},"id":"6c3ebdb6-f18a-465c-ad07-2a432b7033e3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"369501b4-b7fc-4607-8f41-db6cc2fc96c7","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"be407300-a1aa-46da-b4e2-54c620d763ab","type":"Cross"},{"attributes":{"formatter":{"id":"2d9a39a5-4693-4afd-b9c6-34fc1182d0fb","type":"BasicTickFormatter"},"plot":{"id":"3124bf7b-f620-4e20-b206-4419e010a4ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7b318b3-41fb-4922-b8e1-640c65098d94","type":"BasicTicker"}},"id":"df44c5a5-c493-40b0-9f78-a99eaf88b942","type":"LinearAxis"},{"attributes":{"source":{"id":"f187211e-6f8f-4eef-a127-39c6ede247de","type":"ColumnDataSource"}},"id":"c5aaffa7-69a6-4ec7-9dc8-99ba25030d25","type":"CDSView"},{"attributes":{},"id":"8ba6da78-7186-4e50-84d2-d0f71ed40b62","type":"BasicTicker"},{"attributes":{},"id":"a1381a8f-a836-4a98-b315-2a8847a37d34","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"24e24fcf-973d-45de-a5d8-2e9979fa4864","type":"BasicTickFormatter"},"plot":{"id":"3124bf7b-f620-4e20-b206-4419e010a4ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ba6da78-7186-4e50-84d2-d0f71ed40b62","type":"BasicTicker"}},"id":"77b59517-b64a-4a5e-9a15-59e1c472a5fe","type":"LinearAxis"},{"attributes":{"overlay":{"id":"08567042-bee4-45e1-b6ac-4c14c3126941","type":"BoxAnnotation"}},"id":"cd74002d-9810-42d5-95d2-f086c5bba8c2","type":"BoxZoomTool"},{"attributes":{},"id":"e7b318b3-41fb-4922-b8e1-640c65098d94","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d51361a3-240f-40c7-be29-69cda749a567","type":"Cross"},{"attributes":{},"id":"713d2b54-37a8-4795-8cc7-1b11c5ed3737","type":"LinearScale"},{"attributes":{"below":[{"id":"df44c5a5-c493-40b0-9f78-a99eaf88b942","type":"LinearAxis"}],"left":[{"id":"77b59517-b64a-4a5e-9a15-59e1c472a5fe","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"df44c5a5-c493-40b0-9f78-a99eaf88b942","type":"LinearAxis"},{"id":"86c2bdc4-753b-4b84-83cc-6e167e9fcd82","type":"Grid"},{"id":"77b59517-b64a-4a5e-9a15-59e1c472a5fe","type":"LinearAxis"},{"id":"5429ba10-1a60-4e6b-aa4d-b292aa6ac62e","type":"Grid"},{"id":"08567042-bee4-45e1-b6ac-4c14c3126941","type":"BoxAnnotation"},{"id":"6c3ebdb6-f18a-465c-ad07-2a432b7033e3","type":"GlyphRenderer"}],"title":{"id":"eb29fab3-0451-4bb3-80be-af3157055070","type":"Title"},"toolbar":{"id":"43c1df2d-3e8d-4221-9433-9d74b33a3c16","type":"Toolbar"},"x_range":{"id":"fddd0e5e-09c9-4687-8345-100a78b4fd63","type":"DataRange1d"},"x_scale":{"id":"e24db478-26ed-4b44-a609-04aad439f590","type":"LinearScale"},"y_range":{"id":"369501b4-b7fc-4607-8f41-db6cc2fc96c7","type":"DataRange1d"},"y_scale":{"id":"713d2b54-37a8-4795-8cc7-1b11c5ed3737","type":"LinearScale"}},"id":"3124bf7b-f620-4e20-b206-4419e010a4ff","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"fddd0e5e-09c9-4687-8345-100a78b4fd63","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"d6cd7ab1-3f93-48e2-a1b9-016375735966","type":"Selection"},"selection_policy":{"id":"a1381a8f-a836-4a98-b315-2a8847a37d34","type":"UnionRenderers"}},"id":"f187211e-6f8f-4eef-a127-39c6ede247de","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"3124bf7b-f620-4e20-b206-4419e010a4ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ba6da78-7186-4e50-84d2-d0f71ed40b62","type":"BasicTicker"}},"id":"5429ba10-1a60-4e6b-aa4d-b292aa6ac62e","type":"Grid"},{"attributes":{},"id":"29275882-5743-4c71-9e95-7d85da852adc","type":"HelpTool"},{"attributes":{},"id":"8ee056a2-add0-4c46-8530-0dc7b1643c15","type":"WheelZoomTool"}],"root_ids":["3124bf7b-f620-4e20-b206-4419e010a4ff"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b7f990db-f063-4a9b-98b1-3c6629e620f1","roots":{"3124bf7b-f620-4e20-b206-4419e010a4ff":"319eb2cb-2327-455c-8011-3709c99ae7e1"}}];
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
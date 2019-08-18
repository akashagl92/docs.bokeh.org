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
      };var element = document.getElementById("97e57789-dd8c-4b90-a8fa-f26f90c7261b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '97e57789-dd8c-4b90-a8fa-f26f90c7261b' but no matching script tag was found. ")
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
                    var docs_json = {"7c0bf138-e99d-41a1-97ba-ea9582162883":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"4bb79604-e392-4a6d-bc00-795be7736e52","subtype":"Figure","type":"Plot"},"ticker":{"id":"fbb073e5-5b1b-406c-b3bd-84ec0b75bab8","type":"BasicTicker"}},"id":"822b0d60-7dcd-460a-a4e5-5f6e36338905","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"64b1bdd1-1272-4c42-b4b8-cb20dfb213c4","type":"PolyAnnotation"}},"id":"b4bd16c4-7261-4a74-846a-569f49dbbc7b","type":"LassoSelectTool"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"19590ec8-1ac6-45eb-b297-33aeaa6454d8","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3d777e00-2509-43a3-a9c1-36ebbf22a41f","type":"BoxSelectTool"},{"id":"a40931e0-7e61-4d9a-9db6-035860eb8540","type":"BoxZoomTool"},{"id":"b4bd16c4-7261-4a74-846a-569f49dbbc7b","type":"LassoSelectTool"},{"id":"3136ce26-ae98-4532-93cc-681cd6d07447","type":"ResetTool"}]},"id":"89241101-38a8-4ada-9ad9-48a4a45fe285","type":"Toolbar"},{"attributes":{},"id":"9adc0c7f-1971-450f-ae5f-173e982642e5","type":"LinearScale"},{"attributes":{},"id":"b94795fb-da4f-452e-b567-6250e9d589fd","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"2224a044-8f1b-4cbc-b700-3308d45cd2a7","type":"LinearAxis"}],"left":[{"id":"19a669a5-4601-4944-b4a6-f4c6b2ca2ad9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2224a044-8f1b-4cbc-b700-3308d45cd2a7","type":"LinearAxis"},{"id":"65365d7e-3cff-48e8-b0ce-5f0bf2bbfaac","type":"Grid"},{"id":"19a669a5-4601-4944-b4a6-f4c6b2ca2ad9","type":"LinearAxis"},{"id":"822b0d60-7dcd-460a-a4e5-5f6e36338905","type":"Grid"},{"id":"aae731c6-e8be-49c4-a731-fb7f63751f86","type":"BoxAnnotation"},{"id":"16759a6c-1da4-42ee-9437-34c5107608a4","type":"BoxAnnotation"},{"id":"64b1bdd1-1272-4c42-b4b8-cb20dfb213c4","type":"PolyAnnotation"},{"id":"1db7f339-fbc4-45e5-a73a-c37827c05a00","type":"GlyphRenderer"}],"title":{"id":"19590ec8-1ac6-45eb-b297-33aeaa6454d8","type":"Title"},"toolbar":{"id":"89241101-38a8-4ada-9ad9-48a4a45fe285","type":"Toolbar"},"x_range":{"id":"5264e463-4bd9-4a40-b11f-bc065eab9189","type":"DataRange1d"},"x_scale":{"id":"9adc0c7f-1971-450f-ae5f-173e982642e5","type":"LinearScale"},"y_range":{"id":"f2edc57b-525a-4ae7-9a9e-3e6e78a0ae2a","type":"DataRange1d"},"y_scale":{"id":"e8aad038-d12e-42ea-adb7-e29f296a6967","type":"LinearScale"}},"id":"4bb79604-e392-4a6d-bc00-795be7736e52","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"cef47cb1-2cf7-48e1-9e23-647a9e9cd50a","type":"BasicTickFormatter"},"plot":{"id":"4bb79604-e392-4a6d-bc00-795be7736e52","subtype":"Figure","type":"Plot"},"ticker":{"id":"fbb073e5-5b1b-406c-b3bd-84ec0b75bab8","type":"BasicTicker"}},"id":"19a669a5-4601-4944-b4a6-f4c6b2ca2ad9","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"aae731c6-e8be-49c4-a731-fb7f63751f86","type":"BoxAnnotation"},"renderers":[{"id":"1db7f339-fbc4-45e5-a73a-c37827c05a00","type":"GlyphRenderer"}]},"id":"3d777e00-2509-43a3-a9c1-36ebbf22a41f","type":"BoxSelectTool"},{"attributes":{},"id":"e8aad038-d12e-42ea-adb7-e29f296a6967","type":"LinearScale"},{"attributes":{"callback":null},"id":"f2edc57b-525a-4ae7-9a9e-3e6e78a0ae2a","type":"DataRange1d"},{"attributes":{},"id":"cef47cb1-2cf7-48e1-9e23-647a9e9cd50a","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"2cb4eafb-0ddc-4aae-a6cc-82d8a2a65dc0","type":"Circle"},{"attributes":{"data_source":{"id":"e20866bd-0096-4e5e-b996-930868a778ed","type":"ColumnDataSource"},"glyph":{"id":"6d83f022-7dfb-4ae7-b19f-4ae25c377f17","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2cb4eafb-0ddc-4aae-a6cc-82d8a2a65dc0","type":"Circle"},"selection_glyph":null,"view":{"id":"a7c9b9ed-157f-4438-af4c-209d79cc5b42","type":"CDSView"}},"id":"1db7f339-fbc4-45e5-a73a-c37827c05a00","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"e20866bd-0096-4e5e-b996-930868a778ed","type":"ColumnDataSource"},{"attributes":{},"id":"fbb073e5-5b1b-406c-b3bd-84ec0b75bab8","type":"BasicTicker"},{"attributes":{"overlay":{"id":"16759a6c-1da4-42ee-9437-34c5107608a4","type":"BoxAnnotation"}},"id":"a40931e0-7e61-4d9a-9db6-035860eb8540","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16759a6c-1da4-42ee-9437-34c5107608a4","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aae731c6-e8be-49c4-a731-fb7f63751f86","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"5264e463-4bd9-4a40-b11f-bc065eab9189","type":"DataRange1d"},{"attributes":{},"id":"69443d81-38db-4961-970c-ad1e89130c69","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"64b1bdd1-1272-4c42-b4b8-cb20dfb213c4","type":"PolyAnnotation"},{"attributes":{"source":{"id":"e20866bd-0096-4e5e-b996-930868a778ed","type":"ColumnDataSource"}},"id":"a7c9b9ed-157f-4438-af4c-209d79cc5b42","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d83f022-7dfb-4ae7-b19f-4ae25c377f17","type":"Circle"},{"attributes":{"formatter":{"id":"b94795fb-da4f-452e-b567-6250e9d589fd","type":"BasicTickFormatter"},"plot":{"id":"4bb79604-e392-4a6d-bc00-795be7736e52","subtype":"Figure","type":"Plot"},"ticker":{"id":"69443d81-38db-4961-970c-ad1e89130c69","type":"BasicTicker"}},"id":"2224a044-8f1b-4cbc-b700-3308d45cd2a7","type":"LinearAxis"},{"attributes":{},"id":"3136ce26-ae98-4532-93cc-681cd6d07447","type":"ResetTool"},{"attributes":{"plot":{"id":"4bb79604-e392-4a6d-bc00-795be7736e52","subtype":"Figure","type":"Plot"},"ticker":{"id":"69443d81-38db-4961-970c-ad1e89130c69","type":"BasicTicker"}},"id":"65365d7e-3cff-48e8-b0ce-5f0bf2bbfaac","type":"Grid"}],"root_ids":["4bb79604-e392-4a6d-bc00-795be7736e52"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"7c0bf138-e99d-41a1-97ba-ea9582162883","elementid":"97e57789-dd8c-4b90-a8fa-f26f90c7261b","modelid":"4bb79604-e392-4a6d-bc00-795be7736e52"}];
                
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

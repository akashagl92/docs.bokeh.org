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
      };var element = document.getElementById("27d32fe3-1089-4cc5-9d28-6085c2f5b217");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '27d32fe3-1089-4cc5-9d28-6085c2f5b217' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"397483ed-252c-4020-83d8-ccefaa46a30f":{"roots":{"references":[{"attributes":{"callback":{"id":"b33b6e12-eac8-472f-952a-03b43ec91080","type":"CustomJS"},"renderers":[{"id":"d1f6ce56-1f16-4fb7-b415-10469050ddfc","type":"GlyphRenderer"}],"tooltips":null},"id":"0b797127-e956-4f1a-b7c0-5727c8fc3d3b","type":"HoverTool"},{"attributes":{"source":{"id":"154ece49-66a4-4995-ae7f-866e2f35c4a3","type":"ColumnDataSource"}},"id":"4744ec9e-c3cf-4653-b547-9983a99d1f1c","type":"CDSView"},{"attributes":{"args":{"circle":{"id":"af3f8c6f-01d9-4dac-bb3e-dc1172153bb8","type":"ColumnDataSource"},"segment":{"id":"154ece49-66a4-4995-ae7f-866e2f35c4a3","type":"ColumnDataSource"}},"code":"\\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\\nvar data = {&#x27;x0&#x27;: [], &#x27;y0&#x27;: [], &#x27;x1&#x27;: [], &#x27;y1&#x27;: []};\\nvar cdata = circle.data;\\nvar indices = cb_data.index[&#x27;1d&#x27;].indices;\\nfor (var i = 0; i &lt; indices.length; i++) {\\n    var ind0 = indices[i]\\n    for (var j = 0; j &lt; links[ind0].length; j++) {\\n        var ind1 = links[ind0][j];\\n        data[&#x27;x0&#x27;].push(cdata.x[ind0]);\\n        data[&#x27;y0&#x27;].push(cdata.y[ind0]);\\n        data[&#x27;x1&#x27;].push(cdata.x[ind1]);\\n        data[&#x27;y1&#x27;].push(cdata.y[ind1]);\\n    }\\n}\\nsegment.data = data;\\n"},"id":"b33b6e12-eac8-472f-952a-03b43ec91080","type":"CustomJS"},{"attributes":{"source":{"id":"af3f8c6f-01d9-4dac-bb3e-dc1172153bb8","type":"ColumnDataSource"}},"id":"5ccd5c0b-6336-4adf-88e7-731125597447","type":"CDSView"},{"attributes":{},"id":"fbc08697-ba7d-4ad7-ae75-8248cb65d0e2","type":"BasicTickFormatter"},{"attributes":{},"id":"9a5ed170-4ff4-4da0-ae58-6f1241fdd284","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"35c6e531-fcfe-4720-8027-20f783262eb4","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"22b0a787-6861-4b40-813c-85aefff669b9","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"c01cccf8-eba4-4d45-85a1-04cafd779c50","type":"Circle"},{"attributes":{"data_source":{"id":"af3f8c6f-01d9-4dac-bb3e-dc1172153bb8","type":"ColumnDataSource"},"glyph":{"id":"35c6e531-fcfe-4720-8027-20f783262eb4","type":"Circle"},"hover_glyph":{"id":"c01cccf8-eba4-4d45-85a1-04cafd779c50","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22b0a787-6861-4b40-813c-85aefff669b9","type":"Circle"},"selection_glyph":null,"view":{"id":"5ccd5c0b-6336-4adf-88e7-731125597447","type":"CDSView"}},"id":"d1f6ce56-1f16-4fb7-b415-10469050ddfc","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]},"selected":{"id":"d647c65b-ae26-4054-b1da-b5aaa0178395","type":"Selection"},"selection_policy":{"id":"9a5ed170-4ff4-4da0-ae58-6f1241fdd284","type":"UnionRenderers"}},"id":"af3f8c6f-01d9-4dac-bb3e-dc1172153bb8","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"a98bf0f1-51e9-446e-b11d-715c7986782c","type":"Segment"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"07f2a948-fe09-44bc-9628-a2d399f025d6","type":"Segment"},{"attributes":{"callback":null,"data":{"x0":[],"x1":[],"y0":[],"y1":[]},"selected":{"id":"1c0e603a-5a35-4efb-93ae-143157bd1e75","type":"Selection"},"selection_policy":{"id":"1330f60f-b8d4-45ea-9706-4c2efa53eeca","type":"UnionRenderers"}},"id":"154ece49-66a4-4995-ae7f-866e2f35c4a3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"154ece49-66a4-4995-ae7f-866e2f35c4a3","type":"ColumnDataSource"},"glyph":{"id":"a98bf0f1-51e9-446e-b11d-715c7986782c","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"07f2a948-fe09-44bc-9628-a2d399f025d6","type":"Segment"},"selection_glyph":null,"view":{"id":"4744ec9e-c3cf-4653-b547-9983a99d1f1c","type":"CDSView"}},"id":"4d6a72c8-a6b1-4286-8614-515c9f4e6bad","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"84a3c6ea-803a-447f-9382-465d6369a95a","type":"LinearAxis"}],"left":[{"id":"8d18a90b-10ce-4f1e-98df-4173f7fd77a4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"84a3c6ea-803a-447f-9382-465d6369a95a","type":"LinearAxis"},{"id":"99a299de-4d54-4fa6-bafc-183d4022482a","type":"Grid"},{"id":"8d18a90b-10ce-4f1e-98df-4173f7fd77a4","type":"LinearAxis"},{"id":"3297b535-309e-4cb5-a02b-85b0b027f4a0","type":"Grid"},{"id":"4d6a72c8-a6b1-4286-8614-515c9f4e6bad","type":"GlyphRenderer"},{"id":"d1f6ce56-1f16-4fb7-b415-10469050ddfc","type":"GlyphRenderer"}],"title":{"id":"61009f8c-6739-4b11-897b-ed8e676f6923","type":"Title"},"toolbar":{"id":"b26e1f85-ba47-4e29-b439-e64b9b2030a2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5f6f9e8-cc7c-4510-a937-ccf973aca2a7","type":"DataRange1d"},"x_scale":{"id":"38bbd68e-9af4-4589-b7c6-a2fb2d09ebe9","type":"LinearScale"},"y_range":{"id":"306428f4-0a1f-493e-b910-36fe9fb36fc6","type":"DataRange1d"},"y_scale":{"id":"61af0b53-137a-41b3-93f6-4555fbb3e7f1","type":"LinearScale"}},"id":"d8c95c89-3198-48be-a006-14ff4da28226","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"61009f8c-6739-4b11-897b-ed8e676f6923","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"d8c95c89-3198-48be-a006-14ff4da28226","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e6f9858-4a01-4f67-9bc6-93897480b8b3","type":"BasicTicker"}},"id":"3297b535-309e-4cb5-a02b-85b0b027f4a0","type":"Grid"},{"attributes":{},"id":"1330f60f-b8d4-45ea-9706-4c2efa53eeca","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"a5f6f9e8-cc7c-4510-a937-ccf973aca2a7","type":"DataRange1d"},{"attributes":{},"id":"61af0b53-137a-41b3-93f6-4555fbb3e7f1","type":"LinearScale"},{"attributes":{"plot":{"id":"d8c95c89-3198-48be-a006-14ff4da28226","subtype":"Figure","type":"Plot"},"ticker":{"id":"21328f8d-fc78-4390-836d-db4f16bb9635","type":"BasicTicker"}},"id":"99a299de-4d54-4fa6-bafc-183d4022482a","type":"Grid"},{"attributes":{"formatter":{"id":"fbc08697-ba7d-4ad7-ae75-8248cb65d0e2","type":"BasicTickFormatter"},"plot":{"id":"d8c95c89-3198-48be-a006-14ff4da28226","subtype":"Figure","type":"Plot"},"ticker":{"id":"21328f8d-fc78-4390-836d-db4f16bb9635","type":"BasicTicker"}},"id":"84a3c6ea-803a-447f-9382-465d6369a95a","type":"LinearAxis"},{"attributes":{},"id":"21328f8d-fc78-4390-836d-db4f16bb9635","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a2489e83-22f2-4ae3-bc51-8523f49b903b","type":"BasicTickFormatter"},"plot":{"id":"d8c95c89-3198-48be-a006-14ff4da28226","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e6f9858-4a01-4f67-9bc6-93897480b8b3","type":"BasicTicker"}},"id":"8d18a90b-10ce-4f1e-98df-4173f7fd77a4","type":"LinearAxis"},{"attributes":{},"id":"7e6f9858-4a01-4f67-9bc6-93897480b8b3","type":"BasicTicker"},{"attributes":{},"id":"1c0e603a-5a35-4efb-93ae-143157bd1e75","type":"Selection"},{"attributes":{},"id":"a2489e83-22f2-4ae3-bc51-8523f49b903b","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"0b797127-e956-4f1a-b7c0-5727c8fc3d3b","type":"HoverTool"}]},"id":"b26e1f85-ba47-4e29-b439-e64b9b2030a2","type":"Toolbar"},{"attributes":{},"id":"d647c65b-ae26-4054-b1da-b5aaa0178395","type":"Selection"},{"attributes":{},"id":"38bbd68e-9af4-4589-b7c6-a2fb2d09ebe9","type":"LinearScale"},{"attributes":{"callback":null},"id":"306428f4-0a1f-493e-b910-36fe9fb36fc6","type":"DataRange1d"}],"root_ids":["d8c95c89-3198-48be-a006-14ff4da28226"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"397483ed-252c-4020-83d8-ccefaa46a30f","roots":{"d8c95c89-3198-48be-a006-14ff4da28226":"27d32fe3-1089-4cc5-9d28-6085c2f5b217"}}];
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
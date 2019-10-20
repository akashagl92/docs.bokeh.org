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
      };var element = document.getElementById("08c037ea-b93c-419f-b31b-9f2e2f492eb2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08c037ea-b93c-419f-b31b-9f2e2f492eb2' but no matching script tag was found. ")
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
                    var docs_json = {"6a3acc06-4204-4687-814e-5fcbfa860dff":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5d8693b9-3d20-4e38-a029-7825dcfa99cd","type":"Segment"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"89b90c3d-ea4b-445c-91b0-7e13925533de","type":"Segment"},{"attributes":{"data_source":{"id":"eeca79c3-c412-4aa5-a5cb-9e6ca5e13dca","type":"ColumnDataSource"},"glyph":{"id":"5d8693b9-3d20-4e38-a029-7825dcfa99cd","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89b90c3d-ea4b-445c-91b0-7e13925533de","type":"Segment"},"selection_glyph":null,"view":{"id":"4d50c9ee-17cd-4b1e-9d60-45d26d8d1dca","type":"CDSView"}},"id":"1b6625ab-4541-4eef-ae83-b618a592b5b8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"eeca79c3-c412-4aa5-a5cb-9e6ca5e13dca","type":"ColumnDataSource"}},"id":"4d50c9ee-17cd-4b1e-9d60-45d26d8d1dca","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"eeca79c3-c412-4aa5-a5cb-9e6ca5e13dca","type":"ColumnDataSource"},{"attributes":{},"id":"eb8d09c9-cec0-47c4-b7fb-6d5be20ea0e8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3f4677f0-9156-4857-9ae9-897381d65646","subtype":"Figure","type":"Plot"},"ticker":{"id":"6daa7581-0b00-481b-ba01-208bbf5b5466","type":"BasicTicker"}},"id":"bb0f4b46-1e4b-4c17-9ae3-b55a55ec39e5","type":"Grid"},{"attributes":{},"id":"1ed1b4ac-17e2-45d3-96dc-e34508b80f97","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"71e34d7c-6c55-45b5-aba3-c5db8be807ec","type":"CustomJS"},"renderers":[{"id":"66b3ed83-c720-450e-8e27-045d7ae9cb07","type":"GlyphRenderer"}],"tooltips":null},"id":"0e01b208-8be0-4f39-8f9e-e20aed945f4d","type":"HoverTool"},{"attributes":{"data_source":{"id":"2e499388-0e0f-4660-8cca-68186094097b","type":"ColumnDataSource"},"glyph":{"id":"bc0cc56c-63dd-4c52-921b-ece3d2fd5ca9","type":"Circle"},"hover_glyph":{"id":"8ff3d80b-82e2-4e2a-a080-bbdbcc3fecf3","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"4557bdec-ebbb-4c01-a0b5-c5fe8f498d3c","type":"Circle"},"selection_glyph":null,"view":{"id":"7df81f7e-84cc-4cd0-a243-5e69a3821d9c","type":"CDSView"}},"id":"66b3ed83-c720-450e-8e27-045d7ae9cb07","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1ed1b4ac-17e2-45d3-96dc-e34508b80f97","type":"BasicTickFormatter"},"plot":{"id":"3f4677f0-9156-4857-9ae9-897381d65646","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b7c726e-a8d4-43c9-bc19-a7116f96a0a3","type":"BasicTicker"}},"id":"dea10dd1-539f-40cd-af02-cbd887e0f1be","type":"LinearAxis"},{"attributes":{"callback":null},"id":"769b1232-d252-4e69-a3db-b8d895279cd9","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"2e499388-0e0f-4660-8cca-68186094097b","type":"ColumnDataSource"},{"attributes":{},"id":"8b7c726e-a8d4-43c9-bc19-a7116f96a0a3","type":"BasicTicker"},{"attributes":{"below":[{"id":"6f9933db-8bc5-48fc-9cac-039d36e3db5a","type":"LinearAxis"}],"left":[{"id":"dea10dd1-539f-40cd-af02-cbd887e0f1be","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6f9933db-8bc5-48fc-9cac-039d36e3db5a","type":"LinearAxis"},{"id":"bb0f4b46-1e4b-4c17-9ae3-b55a55ec39e5","type":"Grid"},{"id":"dea10dd1-539f-40cd-af02-cbd887e0f1be","type":"LinearAxis"},{"id":"8e3ccd65-9c27-4d81-abc1-024829bf881b","type":"Grid"},{"id":"1b6625ab-4541-4eef-ae83-b618a592b5b8","type":"GlyphRenderer"},{"id":"66b3ed83-c720-450e-8e27-045d7ae9cb07","type":"GlyphRenderer"}],"title":{"id":"0f75e5aa-9dab-495e-83d9-942055b50e30","type":"Title"},"toolbar":{"id":"860466c0-f730-4e5d-86d4-01a09c2f8e07","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0015b470-9cba-49a2-91be-3d25e22bff11","type":"DataRange1d"},"x_scale":{"id":"abf1168c-4a6e-4bf5-b50c-cf6c2984c76b","type":"LinearScale"},"y_range":{"id":"769b1232-d252-4e69-a3db-b8d895279cd9","type":"DataRange1d"},"y_scale":{"id":"ab3a433f-5d16-4adc-b214-f5d7a09646aa","type":"LinearScale"}},"id":"3f4677f0-9156-4857-9ae9-897381d65646","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc0cc56c-63dd-4c52-921b-ece3d2fd5ca9","type":"Circle"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"0f75e5aa-9dab-495e-83d9-942055b50e30","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"4557bdec-ebbb-4c01-a0b5-c5fe8f498d3c","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"3f4677f0-9156-4857-9ae9-897381d65646","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b7c726e-a8d4-43c9-bc19-a7116f96a0a3","type":"BasicTicker"}},"id":"8e3ccd65-9c27-4d81-abc1-024829bf881b","type":"Grid"},{"attributes":{"args":{"circle":{"id":"2e499388-0e0f-4660-8cca-68186094097b","type":"ColumnDataSource"},"segment":{"id":"eeca79c3-c412-4aa5-a5cb-9e6ca5e13dca","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.data;\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.data = data;\n"},"id":"71e34d7c-6c55-45b5-aba3-c5db8be807ec","type":"CustomJS"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ff3d80b-82e2-4e2a-a080-bbdbcc3fecf3","type":"Circle"},{"attributes":{"callback":null},"id":"0015b470-9cba-49a2-91be-3d25e22bff11","type":"DataRange1d"},{"attributes":{"formatter":{"id":"eb8d09c9-cec0-47c4-b7fb-6d5be20ea0e8","type":"BasicTickFormatter"},"plot":{"id":"3f4677f0-9156-4857-9ae9-897381d65646","subtype":"Figure","type":"Plot"},"ticker":{"id":"6daa7581-0b00-481b-ba01-208bbf5b5466","type":"BasicTicker"}},"id":"6f9933db-8bc5-48fc-9cac-039d36e3db5a","type":"LinearAxis"},{"attributes":{},"id":"abf1168c-4a6e-4bf5-b50c-cf6c2984c76b","type":"LinearScale"},{"attributes":{},"id":"6daa7581-0b00-481b-ba01-208bbf5b5466","type":"BasicTicker"},{"attributes":{"source":{"id":"2e499388-0e0f-4660-8cca-68186094097b","type":"ColumnDataSource"}},"id":"7df81f7e-84cc-4cd0-a243-5e69a3821d9c","type":"CDSView"},{"attributes":{},"id":"ab3a433f-5d16-4adc-b214-f5d7a09646aa","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0e01b208-8be0-4f39-8f9e-e20aed945f4d","type":"HoverTool"}]},"id":"860466c0-f730-4e5d-86d4-01a09c2f8e07","type":"Toolbar"}],"root_ids":["3f4677f0-9156-4857-9ae9-897381d65646"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"6a3acc06-4204-4687-814e-5fcbfa860dff","elementid":"08c037ea-b93c-419f-b31b-9f2e2f492eb2","modelid":"3f4677f0-9156-4857-9ae9-897381d65646"}];
                
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

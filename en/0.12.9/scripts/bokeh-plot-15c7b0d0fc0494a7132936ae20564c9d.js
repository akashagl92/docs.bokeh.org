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
      };var element = document.getElementById("d3250345-7853-47d8-a4d5-5a35fc368f85");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd3250345-7853-47d8-a4d5-5a35fc368f85' but no matching script tag was found. ")
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
                    var docs_json = {"2aface0f-6d07-4547-9187-3102f4023df8":{"roots":{"references":[{"attributes":{"formatter":{"id":"56c9c381-77a5-4632-b217-838333bd6bd7","type":"BasicTickFormatter"},"plot":{"id":"d6b65c40-b08f-4ffa-9d25-123d47214fe4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a450587e-1035-4eec-b6e3-425c20168815","type":"BasicTicker"}},"id":"7db7393c-f5bb-4b00-b608-1b4ebdd2560c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"051b8f95-6a54-4d62-b571-61c31d66ae44","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"93365e9f-05cb-4d98-976c-7ac2fbd80132","type":"HoverTool"}]},"id":"5f15e40a-f82c-451b-807d-b0ce6229d49d","type":"Toolbar"},{"attributes":{},"id":"56c9c381-77a5-4632-b217-838333bd6bd7","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"90b8e366-9b2e-4587-9c4e-f5a089ee604c","type":"ColumnDataSource"}},"id":"2e102d24-5b75-464b-a4c8-489eaf41fd37","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"d6b65c40-b08f-4ffa-9d25-123d47214fe4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a450587e-1035-4eec-b6e3-425c20168815","type":"BasicTicker"}},"id":"e333acdd-2d96-4fab-8e24-96157c39afb8","type":"Grid"},{"attributes":{"below":[{"id":"3c4e5ea4-7598-46ba-b56d-65fb232c7c31","type":"LinearAxis"}],"left":[{"id":"7db7393c-f5bb-4b00-b608-1b4ebdd2560c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3c4e5ea4-7598-46ba-b56d-65fb232c7c31","type":"LinearAxis"},{"id":"94c263cd-3934-4b7d-b847-e474c0b0444f","type":"Grid"},{"id":"7db7393c-f5bb-4b00-b608-1b4ebdd2560c","type":"LinearAxis"},{"id":"e333acdd-2d96-4fab-8e24-96157c39afb8","type":"Grid"},{"id":"dd2e4868-67da-49be-af9e-5d8e388e3b8a","type":"GlyphRenderer"},{"id":"6ee1832f-b1cb-4590-b432-01cdaddcd188","type":"GlyphRenderer"}],"title":{"id":"73d748c1-90fb-4af3-96b1-d5af150c5039","type":"Title"},"toolbar":{"id":"5f15e40a-f82c-451b-807d-b0ce6229d49d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"00b5ef3d-f108-4443-aa99-98e25f78bd4d","type":"DataRange1d"},"x_scale":{"id":"fc763818-2f07-4640-b2b4-a558e1f1ccbb","type":"LinearScale"},"y_range":{"id":"26e535d5-5aa1-439e-899d-42e789fb86f7","type":"DataRange1d"},"y_scale":{"id":"74300f30-1b3e-419a-a922-135a4dee8b1a","type":"LinearScale"}},"id":"d6b65c40-b08f-4ffa-9d25-123d47214fe4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"bf65bad3-9203-4a47-9005-c882b9719e01","type":"BasicTickFormatter"},{"attributes":{},"id":"fc763818-2f07-4640-b2b4-a558e1f1ccbb","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"90b8e366-9b2e-4587-9c4e-f5a089ee604c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d6b65c40-b08f-4ffa-9d25-123d47214fe4","subtype":"Figure","type":"Plot"},"ticker":{"id":"36df32bf-7425-459d-89ca-76cb9ab88572","type":"BasicTicker"}},"id":"94c263cd-3934-4b7d-b847-e474c0b0444f","type":"Grid"},{"attributes":{"callback":{"id":"2655e898-aa8b-4f5c-a2e5-7c0e9795da90","type":"CustomJS"},"renderers":[{"id":"6ee1832f-b1cb-4590-b432-01cdaddcd188","type":"GlyphRenderer"}],"tooltips":null},"id":"93365e9f-05cb-4d98-976c-7ac2fbd80132","type":"HoverTool"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b30d3bc-c38f-417d-9c76-7c4249222ef1","type":"Circle"},{"attributes":{"data_source":{"id":"90b8e366-9b2e-4587-9c4e-f5a089ee604c","type":"ColumnDataSource"},"glyph":{"id":"5122512b-04bf-480e-bba0-12a98d0d09bf","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd723d5f-e567-4316-980d-b6ae1bf1927e","type":"Segment"},"selection_glyph":null,"view":{"id":"2e102d24-5b75-464b-a4c8-489eaf41fd37","type":"CDSView"}},"id":"dd2e4868-67da-49be-af9e-5d8e388e3b8a","type":"GlyphRenderer"},{"attributes":{},"id":"36df32bf-7425-459d-89ca-76cb9ab88572","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb0a8026-1d90-4f4a-b54b-36b881614a3c","type":"Circle"},{"attributes":{"callback":null},"id":"00b5ef3d-f108-4443-aa99-98e25f78bd4d","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"fd723d5f-e567-4316-980d-b6ae1bf1927e","type":"Segment"},{"attributes":{},"id":"74300f30-1b3e-419a-a922-135a4dee8b1a","type":"LinearScale"},{"attributes":{"formatter":{"id":"bf65bad3-9203-4a47-9005-c882b9719e01","type":"BasicTickFormatter"},"plot":{"id":"d6b65c40-b08f-4ffa-9d25-123d47214fe4","subtype":"Figure","type":"Plot"},"ticker":{"id":"36df32bf-7425-459d-89ca-76cb9ab88572","type":"BasicTicker"}},"id":"3c4e5ea4-7598-46ba-b56d-65fb232c7c31","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"0fb76133-0f73-485a-bfa0-1d1232470a5c","type":"Circle"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5122512b-04bf-480e-bba0-12a98d0d09bf","type":"Segment"},{"attributes":{"source":{"id":"051b8f95-6a54-4d62-b571-61c31d66ae44","type":"ColumnDataSource"}},"id":"b4282156-cf85-43f9-a9eb-917118229591","type":"CDSView"},{"attributes":{"callback":null},"id":"26e535d5-5aa1-439e-899d-42e789fb86f7","type":"DataRange1d"},{"attributes":{"data_source":{"id":"051b8f95-6a54-4d62-b571-61c31d66ae44","type":"ColumnDataSource"},"glyph":{"id":"bb0a8026-1d90-4f4a-b54b-36b881614a3c","type":"Circle"},"hover_glyph":{"id":"7b30d3bc-c38f-417d-9c76-7c4249222ef1","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"0fb76133-0f73-485a-bfa0-1d1232470a5c","type":"Circle"},"selection_glyph":null,"view":{"id":"b4282156-cf85-43f9-a9eb-917118229591","type":"CDSView"}},"id":"6ee1832f-b1cb-4590-b432-01cdaddcd188","type":"GlyphRenderer"},{"attributes":{"args":{"circle":{"id":"051b8f95-6a54-4d62-b571-61c31d66ae44","type":"ColumnDataSource"},"segment":{"id":"90b8e366-9b2e-4587-9c4e-f5a089ee604c","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.data;\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.data = data;\n"},"id":"2655e898-aa8b-4f5c-a2e5-7c0e9795da90","type":"CustomJS"},{"attributes":{},"id":"a450587e-1035-4eec-b6e3-425c20168815","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"73d748c1-90fb-4af3-96b1-d5af150c5039","type":"Title"}],"root_ids":["d6b65c40-b08f-4ffa-9d25-123d47214fe4"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2aface0f-6d07-4547-9187-3102f4023df8","elementid":"d3250345-7853-47d8-a4d5-5a35fc368f85","modelid":"d6b65c40-b08f-4ffa-9d25-123d47214fe4"}];
                
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

(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("acd20d9b-f973-4d64-bcc0-e6fc56b0b366");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'acd20d9b-f973-4d64-bcc0-e6fc56b0b366' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"97afe15d-45f2-4c8a-9cba-7b565ee77e76":{"roots":{"references":[{"attributes":{"data_source":{"id":"ca2719de-7241-4cf7-bd71-48fd8acb2156","type":"ColumnDataSource"},"glyph":{"id":"7aa35f39-1db8-4b85-9959-f75ffb42294b","type":"Circle"},"hover_glyph":{"id":"07eedd19-8d2c-4ba2-be43-53f84d655c02","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"6a796bb5-39f1-448f-9534-e9b2e0610ee6","type":"Circle"},"selection_glyph":null},"id":"43b513d6-fc91-4915-8960-1ffb0917bb72","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"952823fd-e6e7-4b82-a985-1c708892368f","type":"LinearAxis"}],"left":[{"id":"2d4fbb77-0d81-4d77-a690-5baac6b02f81","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"952823fd-e6e7-4b82-a985-1c708892368f","type":"LinearAxis"},{"id":"e7da5f5c-3890-4f0c-ac69-d1508da284ce","type":"Grid"},{"id":"2d4fbb77-0d81-4d77-a690-5baac6b02f81","type":"LinearAxis"},{"id":"bc076452-0d4d-4eb7-be6d-a73484b23ffd","type":"Grid"},{"id":"2c626b34-adfc-4152-b029-fa0030af89e8","type":"GlyphRenderer"},{"id":"43b513d6-fc91-4915-8960-1ffb0917bb72","type":"GlyphRenderer"}],"title":{"id":"88e77217-5cb5-4677-84d4-ab033d81692f","type":"Title"},"tool_events":{"id":"dd551293-9614-4df8-9532-b1217177ef86","type":"ToolEvents"},"toolbar":{"id":"5053696d-4d6d-43cc-9353-28dee881fe30","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b9c1d89d-b0ff-4756-9c13-41a3d8b33159","type":"DataRange1d"},"x_scale":{"id":"df7db399-16a1-4e47-98dc-e80718f74b5c","type":"LinearScale"},"y_range":{"id":"7eb24600-01a1-4e5d-bb0a-b62ad51e8949","type":"DataRange1d"},"y_scale":{"id":"6f3d0a30-01f7-448e-bb04-3d97ff19f814","type":"LinearScale"}},"id":"b200feb6-d7b1-4dfd-94f4-f7384636de19","subtype":"Figure","type":"Plot"},{"attributes":{"callback":{"id":"7dbbecaf-35b6-4073-bc7e-4109eb0c1e86","type":"CustomJS"},"plot":{"id":"b200feb6-d7b1-4dfd-94f4-f7384636de19","subtype":"Figure","type":"Plot"},"renderers":[{"id":"43b513d6-fc91-4915-8960-1ffb0917bb72","type":"GlyphRenderer"}],"tooltips":null},"id":"ed464bdc-1087-4fa4-8cf7-baa525ab3b95","type":"HoverTool"},{"attributes":{"callback":null},"id":"7eb24600-01a1-4e5d-bb0a-b62ad51e8949","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4775620b-3a49-4920-b079-4b54ec3dbc70","type":"ColumnDataSource"},"glyph":{"id":"350ddc20-7fb4-49d3-8233-3b5a08f3e158","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd275196-3d66-402e-bf39-5a121e136dca","type":"Segment"},"selection_glyph":null},"id":"2c626b34-adfc-4152-b029-fa0030af89e8","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"b200feb6-d7b1-4dfd-94f4-f7384636de19","subtype":"Figure","type":"Plot"},"ticker":{"id":"97c4f101-d74c-4699-8363-bd450020ed61","type":"BasicTicker"}},"id":"bc076452-0d4d-4eb7-be6d-a73484b23ffd","type":"Grid"},{"attributes":{"args":{"circle":{"id":"ca2719de-7241-4cf7-bd71-48fd8acb2156","type":"ColumnDataSource"},"segment":{"id":"4775620b-3a49-4920-b079-4b54ec3dbc70","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.data;\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.data = data;\n"},"id":"7dbbecaf-35b6-4073-bc7e-4109eb0c1e86","type":"CustomJS"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed464bdc-1087-4fa4-8cf7-baa525ab3b95","type":"HoverTool"}]},"id":"5053696d-4d6d-43cc-9353-28dee881fe30","type":"Toolbar"},{"attributes":{"plot":{"id":"b200feb6-d7b1-4dfd-94f4-f7384636de19","subtype":"Figure","type":"Plot"},"ticker":{"id":"22c6dd32-de36-45f5-b255-995726bdd9a7","type":"BasicTicker"}},"id":"e7da5f5c-3890-4f0c-ac69-d1508da284ce","type":"Grid"},{"attributes":{"formatter":{"id":"75068911-7a3e-4f4b-b593-aad76590e132","type":"BasicTickFormatter"},"plot":{"id":"b200feb6-d7b1-4dfd-94f4-f7384636de19","subtype":"Figure","type":"Plot"},"ticker":{"id":"97c4f101-d74c-4699-8363-bd450020ed61","type":"BasicTicker"}},"id":"2d4fbb77-0d81-4d77-a690-5baac6b02f81","type":"LinearAxis"},{"attributes":{},"id":"6f3d0a30-01f7-448e-bb04-3d97ff19f814","type":"LinearScale"},{"attributes":{},"id":"37eaefa9-8854-42c3-9c83-ba42ae30c89f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"ca2719de-7241-4cf7-bd71-48fd8acb2156","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"fd275196-3d66-402e-bf39-5a121e136dca","type":"Segment"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"88e77217-5cb5-4677-84d4-ab033d81692f","type":"Title"},{"attributes":{},"id":"df7db399-16a1-4e47-98dc-e80718f74b5c","type":"LinearScale"},{"attributes":{},"id":"97c4f101-d74c-4699-8363-bd450020ed61","type":"BasicTicker"},{"attributes":{"formatter":{"id":"37eaefa9-8854-42c3-9c83-ba42ae30c89f","type":"BasicTickFormatter"},"plot":{"id":"b200feb6-d7b1-4dfd-94f4-f7384636de19","subtype":"Figure","type":"Plot"},"ticker":{"id":"22c6dd32-de36-45f5-b255-995726bdd9a7","type":"BasicTicker"}},"id":"952823fd-e6e7-4b82-a985-1c708892368f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"07eedd19-8d2c-4ba2-be43-53f84d655c02","type":"Circle"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"350ddc20-7fb4-49d3-8233-3b5a08f3e158","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"7aa35f39-1db8-4b85-9959-f75ffb42294b","type":"Circle"},{"attributes":{},"id":"22c6dd32-de36-45f5-b255-995726bdd9a7","type":"BasicTicker"},{"attributes":{},"id":"dd551293-9614-4df8-9532-b1217177ef86","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"4775620b-3a49-4920-b079-4b54ec3dbc70","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a796bb5-39f1-448f-9534-e9b2e0610ee6","type":"Circle"},{"attributes":{"callback":null},"id":"b9c1d89d-b0ff-4756-9c13-41a3d8b33159","type":"DataRange1d"},{"attributes":{},"id":"75068911-7a3e-4f4b-b593-aad76590e132","type":"BasicTickFormatter"}],"root_ids":["b200feb6-d7b1-4dfd-94f4-f7384636de19"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"97afe15d-45f2-4c8a-9cba-7b565ee77e76","elementid":"acd20d9b-f973-4d64-bcc0-e6fc56b0b366","modelid":"b200feb6-d7b1-4dfd-94f4-f7384636de19"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

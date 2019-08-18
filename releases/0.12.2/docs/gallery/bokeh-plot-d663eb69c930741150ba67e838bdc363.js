document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("34e51fbf-cc98-46c4-a50f-1f730d354c2a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '34e51fbf-cc98-46c4-a50f-1f730d354c2a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"69ec1449-8560-4ba9-8181-e15e63717341":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y1","y0","x1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"95186dbd-18a6-4cdf-906c-1caf287d2f21","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"e6035fe0-c804-4d86-b255-3219fe608dd3","type":"CategoricalTickFormatter"},"plot":{"id":"70c9e903-5eef-4b3f-a247-a159839edde2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ddc5e15-5fd6-4239-8855-0cc81b13bfce","type":"CategoricalTicker"}},"id":"90b3aa45-9e54-4e50-af3f-1eaf284cf807","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"e40ae7c1-96f1-41ac-9839-28aa257da582","type":"BasicTickFormatter"},"plot":{"id":"a25b74af-a161-4a4e-8266-f261d2ba1282","subtype":"Figure","type":"Plot"},"ticker":{"id":"12115e6c-4f03-4776-8e9c-811cdff240bd","type":"BasicTicker"}},"id":"4466b573-e560-42a9-813f-19cddaf00496","type":"LinearAxis"},{"attributes":{"callback":null,"end":100},"id":"62dfd9f3-c8c8-404f-a011-fee07226dcab","type":"Range1d"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b5fd4761-9cbf-4f2d-afb1-e9c3ca04ddbb","type":"Segment"},{"attributes":{"dimension":1,"plot":{"id":"a25b74af-a161-4a4e-8266-f261d2ba1282","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c6abac2-7ec1-4e9b-b8e4-b491c4a40b0c","type":"CategoricalTicker"}},"id":"b654a40e-c586-489b-b483-4be23a0abd55","type":"Grid"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"d790ad5d-4f7d-413c-89ae-46176a7ad13c","type":"FactorRange"},{"attributes":{},"id":"3ddc5e15-5fd6-4239-8855-0cc81b13bfce","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"90b3aa45-9e54-4e50-af3f-1eaf284cf807","type":"CategoricalAxis"}],"left":[{"id":"67a72bbd-a7e2-4c9e-b91d-c01732beb94e","type":"CategoricalAxis"}],"renderers":[{"id":"90b3aa45-9e54-4e50-af3f-1eaf284cf807","type":"CategoricalAxis"},{"id":"10cc4b71-040b-48da-9679-32505daabb6c","type":"Grid"},{"id":"67a72bbd-a7e2-4c9e-b91d-c01732beb94e","type":"CategoricalAxis"},{"id":"f2ad6b3d-0522-4397-8241-513c758fa5ef","type":"Grid"},{"id":"3f3bbf25-15d0-4747-995f-7f4727450d20","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"df7c03a8-645b-485b-b120-6bdaa03d39aa","type":"Title"},"tool_events":{"id":"37db1aa2-dd39-4c24-9b1f-a9445ba104e5","type":"ToolEvents"},"toolbar":{"id":"71673e54-34ba-4717-be96-e5badec45335","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d790ad5d-4f7d-413c-89ae-46176a7ad13c","type":"FactorRange"},"y_range":{"id":"f37849b4-78a2-4c16-b00f-c744c1e8a577","type":"FactorRange"}},"id":"70c9e903-5eef-4b3f-a247-a159839edde2","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"df7c03a8-645b-485b-b120-6bdaa03d39aa","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0c9b18ac-6259-42de-a38a-a225e86d6ed6","type":"Toolbar"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"d29fd4d8-db87-4811-a1cc-b33a542e92fa","type":"Rect"},{"attributes":{},"id":"d83d6883-2380-4802-b5c6-dd28c22c14c7","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"a25b74af-a161-4a4e-8266-f261d2ba1282","subtype":"Figure","type":"Plot"},"ticker":{"id":"12115e6c-4f03-4776-8e9c-811cdff240bd","type":"BasicTicker"}},"id":"c10928e5-d10c-4a0b-bb3e-569867b8cfff","type":"Grid"},{"attributes":{},"id":"12115e6c-4f03-4776-8e9c-811cdff240bd","type":"BasicTicker"},{"attributes":{},"id":"5dd2eae9-bea5-4edc-b25e-570f318366eb","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"e61ca15a-8015-4dbd-922d-5dc6249e1a81","type":"Rect"},{"attributes":{"callback":null,"plot":{"id":"70c9e903-5eef-4b3f-a247-a159839edde2","subtype":"Figure","type":"Plot"}},"id":"03806810-d9c8-4129-9336-4d3c54658356","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"4d827b04-9c09-4b08-b674-d4837f07ec09","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"4466b573-e560-42a9-813f-19cddaf00496","type":"LinearAxis"}],"left":[{"id":"64aa22bf-cd83-4eff-bf01-e938efd13a5b","type":"CategoricalAxis"}],"renderers":[{"id":"4466b573-e560-42a9-813f-19cddaf00496","type":"LinearAxis"},{"id":"c10928e5-d10c-4a0b-bb3e-569867b8cfff","type":"Grid"},{"id":"64aa22bf-cd83-4eff-bf01-e938efd13a5b","type":"CategoricalAxis"},{"id":"b654a40e-c586-489b-b483-4be23a0abd55","type":"Grid"},{"id":"c695bd19-393a-42b3-8980-40e9ef130561","type":"GlyphRenderer"},{"id":"97fe8aa1-47df-4ffb-bcb7-e1b5a1fa1a8b","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"c4244daa-dc68-469d-9af2-904ad766df7d","type":"Title"},"tool_events":{"id":"f9ec4fd9-d873-4a68-9c38-55ca53138623","type":"ToolEvents"},"toolbar":{"id":"0c9b18ac-6259-42de-a38a-a225e86d6ed6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"62dfd9f3-c8c8-404f-a011-fee07226dcab","type":"Range1d"},"y_range":{"id":"08a4d142-e195-4b65-95a2-d7246ffdc92c","type":"FactorRange"}},"id":"a25b74af-a161-4a4e-8266-f261d2ba1282","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37db1aa2-dd39-4c24-9b1f-a9445ba104e5","type":"ToolEvents"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"08a4d142-e195-4b65-95a2-d7246ffdc92c","type":"FactorRange"},{"attributes":{},"id":"f9ec4fd9-d873-4a68-9c38-55ca53138623","type":"ToolEvents"},{"attributes":{"children":[{"id":"70c9e903-5eef-4b3f-a247-a159839edde2","subtype":"Figure","type":"Plot"},{"id":"a25b74af-a161-4a4e-8266-f261d2ba1282","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"a514f693-76ea-4dc2-b617-68d02f0d08ca","type":"Row"},{"attributes":{"formatter":{"id":"5dd2eae9-bea5-4edc-b25e-570f318366eb","type":"CategoricalTickFormatter"},"plot":{"id":"70c9e903-5eef-4b3f-a247-a159839edde2","subtype":"Figure","type":"Plot"},"ticker":{"id":"556543b8-7dd2-4b44-9c04-c5048a2cda63","type":"CategoricalTicker"}},"id":"67a72bbd-a7e2-4c9e-b91d-c01732beb94e","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"77d20d99-652f-4d12-b412-48f5aa94ff08","type":"Circle"},{"attributes":{},"id":"556543b8-7dd2-4b44-9c04-c5048a2cda63","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"95186dbd-18a6-4cdf-906c-1caf287d2f21","type":"ColumnDataSource"},"glyph":{"id":"b5fd4761-9cbf-4f2d-afb1-e9c3ca04ddbb","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"4fb32715-bf7a-4aad-98b4-252465582bc6","type":"Segment"},"selection_glyph":null},"id":"c695bd19-393a-42b3-8980-40e9ef130561","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"70c9e903-5eef-4b3f-a247-a159839edde2","subtype":"Figure","type":"Plot"},"ticker":{"id":"556543b8-7dd2-4b44-9c04-c5048a2cda63","type":"CategoricalTicker"}},"id":"f2ad6b3d-0522-4397-8241-513c758fa5ef","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"6e897e6a-8add-4259-addf-50aae3f9e1bd","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"f37849b4-78a2-4c16-b00f-c744c1e8a577","type":"FactorRange"},{"attributes":{},"id":"0c6abac2-7ec1-4e9b-b8e4-b491c4a40b0c","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc5d6ed2-df14-43de-a983-948eee330df6","type":"Circle"},{"attributes":{"formatter":{"id":"d83d6883-2380-4802-b5c6-dd28c22c14c7","type":"CategoricalTickFormatter"},"plot":{"id":"a25b74af-a161-4a4e-8266-f261d2ba1282","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c6abac2-7ec1-4e9b-b8e4-b491c4a40b0c","type":"CategoricalTicker"}},"id":"64aa22bf-cd83-4eff-bf01-e938efd13a5b","type":"CategoricalAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"4fb32715-bf7a-4aad-98b4-252465582bc6","type":"Segment"},{"attributes":{"data_source":{"id":"6e897e6a-8add-4259-addf-50aae3f9e1bd","type":"ColumnDataSource"},"glyph":{"id":"bc5d6ed2-df14-43de-a983-948eee330df6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"77d20d99-652f-4d12-b412-48f5aa94ff08","type":"Circle"},"selection_glyph":null},"id":"97fe8aa1-47df-4ffb-bcb7-e1b5a1fa1a8b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"70c9e903-5eef-4b3f-a247-a159839edde2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ddc5e15-5fd6-4239-8855-0cc81b13bfce","type":"CategoricalTicker"}},"id":"10cc4b71-040b-48da-9679-32505daabb6c","type":"Grid"},{"attributes":{},"id":"e6035fe0-c804-4d86-b255-3219fe608dd3","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"c4244daa-dc68-469d-9af2-904ad766df7d","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"03806810-d9c8-4129-9336-4d3c54658356","type":"HoverTool"}]},"id":"71673e54-34ba-4717-be96-e5badec45335","type":"Toolbar"},{"attributes":{},"id":"e40ae7c1-96f1-41ac-9839-28aa257da582","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4d827b04-9c09-4b08-b674-d4837f07ec09","type":"ColumnDataSource"},"glyph":{"id":"d29fd4d8-db87-4811-a1cc-b33a542e92fa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"e61ca15a-8015-4dbd-922d-5dc6249e1a81","type":"Rect"},"selection_glyph":null},"id":"3f3bbf25-15d0-4747-995f-7f4727450d20","type":"GlyphRenderer"}],"root_ids":["a514f693-76ea-4dc2-b617-68d02f0d08ca"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"69ec1449-8560-4ba9-8181-e15e63717341","elementid":"34e51fbf-cc98-46c4-a50f-1f730d354c2a","modelid":"a514f693-76ea-4dc2-b617-68d02f0d08ca"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});
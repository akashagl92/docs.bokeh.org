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
      };var element = document.getElementById("b94b7f33-7df4-43e9-9496-633441aaead4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b94b7f33-7df4-43e9-9496-633441aaead4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"7d97c0f7-6e12-4bed-af6f-548c872faa9e":{"roots":{"references":[{"attributes":{"label":{"value":"python"},"renderers":[{"id":"998ca8bb-6d7d-43a0-b86d-53847f6d7fdb","type":"GlyphRenderer"}]},"id":"c6b6597a-8c2a-4bae-8c64-b0ba47339c95","type":"LegendItem"},{"attributes":{"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"},"ticker":{"id":"3847b4bc-4caa-405f-99d4-0d52686155cd","type":"BasicTicker"}},"id":"d4969311-8f30-47d1-80e0-04dcfdeb2def","type":"Grid"},{"attributes":{"plot":null,"text":"Interpreter Sample Data"},"id":"fe1d7464-7336-4bca-bd69-b7e0d7c12d7c","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5dd16eec-2dde-45b8-af71-09faef96ec92","type":"PanTool"},{"id":"4ac59ad7-c128-4f36-8110-7031d09de96d","type":"WheelZoomTool"},{"id":"f7954eac-f2f6-486a-8fca-f1a77e6cd3fb","type":"BoxZoomTool"},{"id":"2c0f6d97-1bc6-4f61-bae7-15df51f534c1","type":"SaveTool"},{"id":"68e7ee72-d017-4d7c-ad65-2d5a167efaea","type":"ResetTool"},{"id":"f083754f-08bc-4525-b4a6-f8fe37201fee","type":"HelpTool"}]},"id":"64e299a5-fecb-4601-9146-baa1d5c498f6","type":"Toolbar"},{"attributes":{"overlay":{"id":"043d6b99-cb16-4174-a0bf-854e936d1035","type":"BoxAnnotation"},"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"}},"id":"f7954eac-f2f6-486a-8fca-f1a77e6cd3fb","type":"BoxZoomTool"},{"attributes":{},"id":"596e9eaf-88cf-477a-8cc3-ed3ab668c925","type":"ToolEvents"},{"attributes":{"axis_label":"Duration","formatter":{"id":"39138f3b-7b6a-499a-ba2f-fbfdf7435406","type":"BasicTickFormatter"},"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"},"ticker":{"id":"adfb7f11-c6b9-4ee5-8668-28eac3976e7a","type":"BasicTicker"}},"id":"16ae332a-d1ca-47da-b54a-989a77936f48","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"},"ticker":{"id":"adfb7f11-c6b9-4ee5-8668-28eac3976e7a","type":"BasicTicker"}},"id":"ae368831-bd05-4576-a6bd-1700b125c95e","type":"Grid"},{"attributes":{},"id":"39138f3b-7b6a-499a-ba2f-fbfdf7435406","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"30097710-f5e3-4610-b2fe-5998db4fb486","type":"ColumnDataSource"},"glyph":{"id":"626ae356-6348-4388-8b5e-8148a3ac77be","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"45883233-7495-420d-a445-e6449e232d11","type":"GlyphRenderer"},{"attributes":{},"id":"adfb7f11-c6b9-4ee5-8668-28eac3976e7a","type":"BasicTicker"},{"attributes":{"items":[{"id":"e1724dd7-8bd7-4711-bf6d-9f2ef48d57a5","type":"LegendItem"},{"id":"83a1690a-896e-49e3-95f4-bb3f13077778","type":"LegendItem"},{"id":"c6b6597a-8c2a-4bae-8c64-b0ba47339c95","type":"LegendItem"}],"location":"top_left","plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"}},"id":"c6315d79-65b4-4d29-8ba6-546738e77d57","type":"Legend"},{"attributes":{"data_source":{"id":"5f4ad802-bbc4-41c0-8b76-c4462e995a3e","type":"ColumnDataSource"},"glyph":{"id":"f1f77cb1-1974-4680-852f-d8f8281679fa","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"48698608-0123-4d65-a23b-56c37f7d5bd1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"}],"series":["jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[22,43,10,25,26,101,114,203,194,215,201,227,139,160]}},"id":"5f4ad802-bbc4-41c0-8b76-c4462e995a3e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"}},"id":"4ac59ad7-c128-4f36-8110-7031d09de96d","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"fd62cf37-04ce-4b0e-8529-d4e9b1c354bc","type":"ColumnDataSource"},"glyph":{"id":"080f039b-c78d-4013-a592-cb1c4da64698","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"998ca8bb-6d7d-43a0-b86d-53847f6d7fdb","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"626ae356-6348-4388-8b5e-8148a3ac77be","type":"Line"},{"attributes":{},"id":"d59f3e73-6b7a-4771-b4f8-63a731650603","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"7b5d9a97-9e60-4b92-b750-69d593b634d9","type":"Range1d"},{"attributes":{"label":{"value":"jython"},"renderers":[{"id":"48698608-0123-4d65-a23b-56c37f7d5bd1","type":"GlyphRenderer"}]},"id":"e1724dd7-8bd7-4711-bf6d-9f2ef48d57a5","type":"LegendItem"},{"attributes":{"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"}},"id":"68e7ee72-d017-4d7c-ad65-2d5a167efaea","type":"ResetTool"},{"attributes":{"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"}},"id":"f083754f-08bc-4525-b4a6-f8fe37201fee","type":"HelpTool"},{"attributes":{"label":{"value":"pypy"},"renderers":[{"id":"45883233-7495-420d-a445-e6449e232d11","type":"GlyphRenderer"}]},"id":"83a1690a-896e-49e3-95f4-bb3f13077778","type":"LegendItem"},{"attributes":{},"id":"3847b4bc-4caa-405f-99d4-0d52686155cd","type":"BasicTicker"},{"attributes":{"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"}},"id":"2c0f6d97-1bc6-4f61-bae7-15df51f534c1","type":"SaveTool"},{"attributes":{"line_color":{"value":"#407ee7"},"line_dash":[2,4],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"080f039b-c78d-4013-a592-cb1c4da64698","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"043d6b99-cb16-4174-a0bf-854e936d1035","type":"BoxAnnotation"},{"attributes":{"axis_label":"index","formatter":{"id":"d59f3e73-6b7a-4771-b4f8-63a731650603","type":"BasicTickFormatter"},"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"},"ticker":{"id":"3847b4bc-4caa-405f-99d4-0d52686155cd","type":"BasicTicker"}},"id":"2355813b-b940-4d40-a593-0ab4f32669f9","type":"LinearAxis"},{"attributes":{"plot":{"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"}},"id":"5dd16eec-2dde-45b8-af71-09faef96ec92","type":"PanTool"},{"attributes":{"below":[{"id":"2355813b-b940-4d40-a593-0ab4f32669f9","type":"LinearAxis"}],"height":400,"left":[{"id":"16ae332a-d1ca-47da-b54a-989a77936f48","type":"LinearAxis"}],"renderers":[{"id":"043d6b99-cb16-4174-a0bf-854e936d1035","type":"BoxAnnotation"},{"id":"998ca8bb-6d7d-43a0-b86d-53847f6d7fdb","type":"GlyphRenderer"},{"id":"45883233-7495-420d-a445-e6449e232d11","type":"GlyphRenderer"},{"id":"48698608-0123-4d65-a23b-56c37f7d5bd1","type":"GlyphRenderer"},{"id":"c6315d79-65b4-4d29-8ba6-546738e77d57","type":"Legend"},{"id":"2355813b-b940-4d40-a593-0ab4f32669f9","type":"LinearAxis"},{"id":"16ae332a-d1ca-47da-b54a-989a77936f48","type":"LinearAxis"},{"id":"d4969311-8f30-47d1-80e0-04dcfdeb2def","type":"Grid"},{"id":"ae368831-bd05-4576-a6bd-1700b125c95e","type":"Grid"}],"title":{"id":"fe1d7464-7336-4bca-bd69-b7e0d7c12d7c","type":"Title"},"tool_events":{"id":"596e9eaf-88cf-477a-8cc3-ed3ab668c925","type":"ToolEvents"},"toolbar":{"id":"64e299a5-fecb-4601-9146-baa1d5c498f6","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"7b5d9a97-9e60-4b92-b750-69d593b634d9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5cd051e2-37c4-4bff-bf5e-febbfb8e795e","type":"Range1d"}},"id":"c1fce010-a0a9-4044-9a68-3642305049e9","subtype":"Chart","type":"Plot"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"f1f77cb1-1974-4680-852f-d8f8281679fa","type":"Line"},{"attributes":{"callback":null,"end":293.5,"start":-24.5},"id":"5cd051e2-37c4-4bff-bf5e-febbfb8e795e","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"}],"series":["pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[12,33,47,15,126,121,144,233,254,225,226,267,110,130]}},"id":"30097710-f5e3-4610-b2fe-5998db4fb486","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"}],"series":["python","python","python","python","python","python","python","python","python","python","python","python","python","python"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[2,3,7,5,26,221,44,233,254,265,266,267,120,111]}},"id":"fd62cf37-04ce-4b0e-8529-d4e9b1c354bc","type":"ColumnDataSource"}],"root_ids":["c1fce010-a0a9-4044-9a68-3642305049e9"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"7d97c0f7-6e12-4bed-af6f-548c872faa9e","elementid":"b94b7f33-7df4-43e9-9496-633441aaead4","modelid":"c1fce010-a0a9-4044-9a68-3642305049e9"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
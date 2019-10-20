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
      };var element = document.getElementById("ae231016-a453-46bb-a865-fde472a86a41");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ae231016-a453-46bb-a865-fde472a86a41' but no matching script tag was found. ")
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
                  var docs_json = {"182e6d5e-cfae-4b0f-a0a2-a3614a947856":{"roots":{"references":[{"attributes":{},"id":"67689f3d-c233-4707-a86a-937541588546","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"}],"series":["python","python","python","python","python","python","python","python","python","python","python","python","python","python"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[2,3,7,5,26,221,44,233,254,265,266,267,120,111]}},"id":"a220c304-b21f-404a-9284-f41edc03e5e7","type":"ColumnDataSource"},{"attributes":{"axis_label":"index","formatter":{"id":"923267de-cbab-4b8f-b7bf-9cf64625432f","type":"BasicTickFormatter"},"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"},"ticker":{"id":"f8b49d18-1c8b-4b2a-994c-99d48a0584bc","type":"BasicTicker"}},"id":"f31549b5-150e-4802-91a9-e439dd4aa536","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f7524796-394f-484a-bfff-4e90adf5ca28","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"bd4058ff-4b6e-44fa-b87a-2abb65cb5257","type":"Line"},{"attributes":{"axis_label":"Duration","formatter":{"id":"93e5acbc-89d7-48dc-b028-a722faf878d3","type":"BasicTickFormatter"},"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"},"ticker":{"id":"7461d881-6baa-4058-bb9a-922cafd7bcb0","type":"BasicTicker"}},"id":"c4b2b3d0-a18b-472c-ba9d-920b86273e9e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"94def980-f810-4ac1-8c9d-5d48490a1181","type":"ColumnDataSource"},"glyph":{"id":"bb95213a-e965-4ee3-a8c3-a28d6e11e0f5","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"83ece08d-9d20-45f6-a95a-ae844789558e","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"},"ticker":{"id":"7461d881-6baa-4058-bb9a-922cafd7bcb0","type":"BasicTicker"}},"id":"6623b09e-0bc7-42fa-95a5-30a77da3fc45","type":"Grid"},{"attributes":{"line_color":{"value":"#407ee7"},"line_dash":[2,4],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"173e2e96-a64b-41f6-83f4-0d62c4007a68","type":"Line"},{"attributes":{},"id":"93e5acbc-89d7-48dc-b028-a722faf878d3","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"}},"id":"f7fab5e2-bbb4-4aa6-9468-0e6a4b29bb04","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"}],"series":["pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[12,33,47,15,126,121,144,233,254,225,226,267,110,130]}},"id":"94def980-f810-4ac1-8c9d-5d48490a1181","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"bb95213a-e965-4ee3-a8c3-a28d6e11e0f5","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7791f068-e218-4989-97c0-35bebb94bce4","type":"PanTool"},{"id":"f7fab5e2-bbb4-4aa6-9468-0e6a4b29bb04","type":"WheelZoomTool"},{"id":"c0ae86e9-9150-4dc5-bd41-eb86c2a98d5c","type":"BoxZoomTool"},{"id":"b6e3f676-86da-4520-95b2-4cbc14b1fed2","type":"SaveTool"},{"id":"2b1ad583-00d2-4279-87c5-2897196423b6","type":"ResetTool"},{"id":"d6707391-979e-497e-83f8-84a72b06f584","type":"HelpTool"}]},"id":"d87f9320-e766-4e7d-b542-51a9edf50b62","type":"Toolbar"},{"attributes":{},"id":"f8b49d18-1c8b-4b2a-994c-99d48a0584bc","type":"BasicTicker"},{"attributes":{"below":[{"id":"f31549b5-150e-4802-91a9-e439dd4aa536","type":"LinearAxis"}],"height":400,"left":[{"id":"c4b2b3d0-a18b-472c-ba9d-920b86273e9e","type":"LinearAxis"}],"renderers":[{"id":"f7524796-394f-484a-bfff-4e90adf5ca28","type":"BoxAnnotation"},{"id":"8047a9ef-b3f0-4135-bf45-d54acbf48332","type":"GlyphRenderer"},{"id":"83ece08d-9d20-45f6-a95a-ae844789558e","type":"GlyphRenderer"},{"id":"cdff530a-aa37-4c44-a48d-8e3838eeae42","type":"GlyphRenderer"},{"id":"95cdd457-1d41-4812-944f-47b7fc465dc0","type":"Legend"},{"id":"f31549b5-150e-4802-91a9-e439dd4aa536","type":"LinearAxis"},{"id":"c4b2b3d0-a18b-472c-ba9d-920b86273e9e","type":"LinearAxis"},{"id":"afa44549-dfda-4529-ab9e-dfeb9c036dfe","type":"Grid"},{"id":"6623b09e-0bc7-42fa-95a5-30a77da3fc45","type":"Grid"}],"title":{"id":"85bbacf2-7504-4ec1-b24c-322461f4c1c2","type":"Title"},"tool_events":{"id":"67689f3d-c233-4707-a86a-937541588546","type":"ToolEvents"},"toolbar":{"id":"d87f9320-e766-4e7d-b542-51a9edf50b62","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"ea8e5460-245d-4702-97d7-33da44b5852b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"fbc7c15f-07ae-46d1-9a0d-942138f86a81","type":"Range1d"}},"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"3db61043-900a-4360-ba86-8e4300a07c7e","type":"ColumnDataSource"},"glyph":{"id":"bd4058ff-4b6e-44fa-b87a-2abb65cb5257","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cdff530a-aa37-4c44-a48d-8e3838eeae42","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"}},"id":"b6e3f676-86da-4520-95b2-4cbc14b1fed2","type":"SaveTool"},{"attributes":{"data_source":{"id":"a220c304-b21f-404a-9284-f41edc03e5e7","type":"ColumnDataSource"},"glyph":{"id":"173e2e96-a64b-41f6-83f4-0d62c4007a68","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8047a9ef-b3f0-4135-bf45-d54acbf48332","type":"GlyphRenderer"},{"attributes":{"legends":[["jython",[{"id":"cdff530a-aa37-4c44-a48d-8e3838eeae42","type":"GlyphRenderer"}]],["pypy",[{"id":"83ece08d-9d20-45f6-a95a-ae844789558e","type":"GlyphRenderer"}]],["python",[{"id":"8047a9ef-b3f0-4135-bf45-d54acbf48332","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"}},"id":"95cdd457-1d41-4812-944f-47b7fc465dc0","type":"Legend"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"ea8e5460-245d-4702-97d7-33da44b5852b","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"}],"series":["jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[22,43,10,25,26,101,114,203,194,215,201,227,139,160]}},"id":"3db61043-900a-4360-ba86-8e4300a07c7e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"}},"id":"d6707391-979e-497e-83f8-84a72b06f584","type":"HelpTool"},{"attributes":{},"id":"7461d881-6baa-4058-bb9a-922cafd7bcb0","type":"BasicTicker"},{"attributes":{},"id":"923267de-cbab-4b8f-b7bf-9cf64625432f","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"f7524796-394f-484a-bfff-4e90adf5ca28","type":"BoxAnnotation"},"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"}},"id":"c0ae86e9-9150-4dc5-bd41-eb86c2a98d5c","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":293.5,"start":-24.5},"id":"fbc7c15f-07ae-46d1-9a0d-942138f86a81","type":"Range1d"},{"attributes":{"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"},"ticker":{"id":"f8b49d18-1c8b-4b2a-994c-99d48a0584bc","type":"BasicTicker"}},"id":"afa44549-dfda-4529-ab9e-dfeb9c036dfe","type":"Grid"},{"attributes":{"plot":null,"text":"Interpreter Sample Data"},"id":"85bbacf2-7504-4ec1-b24c-322461f4c1c2","type":"Title"},{"attributes":{"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"}},"id":"7791f068-e218-4989-97c0-35bebb94bce4","type":"PanTool"},{"attributes":{"plot":{"id":"337e6ac8-cb95-4df0-a192-85c8f16d2810","subtype":"Chart","type":"Plot"}},"id":"2b1ad583-00d2-4279-87c5-2897196423b6","type":"ResetTool"}],"root_ids":["337e6ac8-cb95-4df0-a192-85c8f16d2810"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"182e6d5e-cfae-4b0f-a0a2-a3614a947856","elementid":"ae231016-a453-46bb-a865-fde472a86a41","modelid":"337e6ac8-cb95-4df0-a192-85c8f16d2810"}];
                  
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
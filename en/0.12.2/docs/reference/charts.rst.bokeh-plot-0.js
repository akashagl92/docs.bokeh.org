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
      };var element = document.getElementById("b04008bb-ed0c-4271-9701-629451f07eea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b04008bb-ed0c-4271-9701-629451f07eea' but no matching script tag was found. ")
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
                  var docs_json = {"6a620b04-cba3-49de-a2f1-e499ca2ae7a0":{"roots":{"references":[{"attributes":{"data_source":{"id":"3404435e-17fa-4278-b13e-0b8ef9827d9e","type":"ColumnDataSource"},"glyph":{"id":"1eedafc1-f3b8-494d-8157-3be4364918de","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"009eae28-4140-4843-94ed-3976e4dc0a56","type":"GlyphRenderer"},{"attributes":{"legends":[["jython",[{"id":"009eae28-4140-4843-94ed-3976e4dc0a56","type":"GlyphRenderer"}]],["pypy",[{"id":"5bc13cf0-254e-49a7-baa7-35cf7f58894d","type":"GlyphRenderer"}]],["python",[{"id":"2f40918b-c257-4401-a36a-34f16abbb089","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"}},"id":"d77ba832-f557-4c61-a4ab-89b7fe64c8e2","type":"Legend"},{"attributes":{"plot":null,"text":"Area Chart"},"id":"c8f84697-1e88-4a21-8302-7fa4ebf564a6","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"},"ticker":{"id":"e8096ed0-fb56-4645-8c09-f67ab61351db","type":"BasicTicker"}},"id":"b07add64-0d72-455f-82e1-2fd9c06b2fc0","type":"Grid"},{"attributes":{"data_source":{"id":"f37b0c22-df2d-46c5-824b-00ab81a04ee3","type":"ColumnDataSource"},"glyph":{"id":"abd85e7b-435f-48e9-87ea-98a96a469efe","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5bc13cf0-254e-49a7-baa7-35cf7f58894d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"}},"id":"6071c112-5c82-4914-aea5-a8a3b0644b89","type":"SaveTool"},{"attributes":{"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"},"ticker":{"id":"b3b6b762-4132-4e7d-b868-e1f52cefca23","type":"BasicTicker"}},"id":"1b18cabf-5c25-4a0b-9bbc-6c6106a78234","type":"Grid"},{"attributes":{"overlay":{"id":"3d53915c-5861-4496-a886-1df9b8f8749a","type":"BoxAnnotation"},"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"}},"id":"d4f686f7-993f-492b-9de7-99768b6a957f","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,22.0,43.0,10.0,25.0,26.0,101.0,114.0,203.0,194.0,215.0,201.0,227.0,139.0,160.0,0.0]]}},"id":"3404435e-17fa-4278-b13e-0b8ef9827d9e","type":"ColumnDataSource"},{"attributes":{"axis_label":"time","formatter":{"id":"29a78e71-58d3-4350-9573-1602ef1a1163","type":"BasicTickFormatter"},"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"},"ticker":{"id":"b3b6b762-4132-4e7d-b868-e1f52cefca23","type":"BasicTicker"}},"id":"821c981e-604c-485d-8ed3-2e42eb81cc9c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4416a8da-182e-402b-a54f-872de85d9185","type":"PanTool"},{"id":"e49635d1-bf3f-4e66-8e81-5ca47d94947a","type":"WheelZoomTool"},{"id":"d4f686f7-993f-492b-9de7-99768b6a957f","type":"BoxZoomTool"},{"id":"6071c112-5c82-4914-aea5-a8a3b0644b89","type":"SaveTool"},{"id":"55544624-0a78-4597-b33a-c8e0ec88a011","type":"ResetTool"},{"id":"7cbac848-496c-494b-aba5-6746782271da","type":"HelpTool"}]},"id":"2aff47de-a5d2-4918-a159-354f52a9ef60","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"ceed97e1-e958-405d-938c-517d2f659e07","type":"Patches"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"abd85e7b-435f-48e9-87ea-98a96a469efe","type":"Patches"},{"attributes":{"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"}},"id":"e49635d1-bf3f-4e66-8e81-5ca47d94947a","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"821c981e-604c-485d-8ed3-2e42eb81cc9c","type":"LinearAxis"}],"height":400,"left":[{"id":"ad892908-4b23-4c68-ac6e-4b281d006539","type":"LinearAxis"}],"renderers":[{"id":"3d53915c-5861-4496-a886-1df9b8f8749a","type":"BoxAnnotation"},{"id":"009eae28-4140-4843-94ed-3976e4dc0a56","type":"GlyphRenderer"},{"id":"5bc13cf0-254e-49a7-baa7-35cf7f58894d","type":"GlyphRenderer"},{"id":"2f40918b-c257-4401-a36a-34f16abbb089","type":"GlyphRenderer"},{"id":"d77ba832-f557-4c61-a4ab-89b7fe64c8e2","type":"Legend"},{"id":"821c981e-604c-485d-8ed3-2e42eb81cc9c","type":"LinearAxis"},{"id":"ad892908-4b23-4c68-ac6e-4b281d006539","type":"LinearAxis"},{"id":"1b18cabf-5c25-4a0b-9bbc-6c6106a78234","type":"Grid"},{"id":"b07add64-0d72-455f-82e1-2fd9c06b2fc0","type":"Grid"}],"title":{"id":"c8f84697-1e88-4a21-8302-7fa4ebf564a6","type":"Title"},"tool_events":{"id":"673ecbdd-d135-456e-af7a-e0fe552c0b3f","type":"ToolEvents"},"toolbar":{"id":"2aff47de-a5d2-4918-a159-354f52a9ef60","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"e33cdc41-ad7f-4215-88ff-528fc58c581f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5c26e125-0f13-49bc-8ab1-7e4f07b12aaf","type":"Range1d"}},"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"a30dfbb5-979b-4d94-9238-e2c68acd6b1e","type":"ColumnDataSource"},"glyph":{"id":"ceed97e1-e958-405d-938c-517d2f659e07","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2f40918b-c257-4401-a36a-34f16abbb089","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3d53915c-5861-4496-a886-1df9b8f8749a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"}},"id":"7cbac848-496c-494b-aba5-6746782271da","type":"HelpTool"},{"attributes":{"axis_label":"memory","formatter":{"id":"a6ec2cb8-4a97-48f4-8efc-f90799fd39b6","type":"BasicTickFormatter"},"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"},"ticker":{"id":"e8096ed0-fb56-4645-8c09-f67ab61351db","type":"BasicTicker"}},"id":"ad892908-4b23-4c68-ac6e-4b281d006539","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,2.0,3.0,7.0,5.0,26.0,221.0,44.0,233.0,254.0,265.0,266.0,267.0,120.0,111.0,0.0]]}},"id":"a30dfbb5-979b-4d94-9238-e2c68acd6b1e","type":"ColumnDataSource"},{"attributes":{},"id":"673ecbdd-d135-456e-af7a-e0fe552c0b3f","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,12.0,33.0,47.0,15.0,126.0,121.0,144.0,233.0,254.0,225.0,226.0,267.0,110.0,130.0,0.0]]}},"id":"f37b0c22-df2d-46c5-824b-00ab81a04ee3","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"e33cdc41-ad7f-4215-88ff-528fc58c581f","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"1eedafc1-f3b8-494d-8157-3be4364918de","type":"Patches"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"5c26e125-0f13-49bc-8ab1-7e4f07b12aaf","type":"Range1d"},{"attributes":{},"id":"a6ec2cb8-4a97-48f4-8efc-f90799fd39b6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"}},"id":"4416a8da-182e-402b-a54f-872de85d9185","type":"PanTool"},{"attributes":{},"id":"b3b6b762-4132-4e7d-b868-e1f52cefca23","type":"BasicTicker"},{"attributes":{"plot":{"id":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b","subtype":"Chart","type":"Plot"}},"id":"55544624-0a78-4597-b33a-c8e0ec88a011","type":"ResetTool"},{"attributes":{},"id":"e8096ed0-fb56-4645-8c09-f67ab61351db","type":"BasicTicker"},{"attributes":{},"id":"29a78e71-58d3-4350-9573-1602ef1a1163","type":"BasicTickFormatter"}],"root_ids":["d7524ffd-e375-4eb1-8125-4a8f354c0e5b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"6a620b04-cba3-49de-a2f1-e499ca2ae7a0","elementid":"b04008bb-ed0c-4271-9701-629451f07eea","modelid":"d7524ffd-e375-4eb1-8125-4a8f354c0e5b"}];
                  
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
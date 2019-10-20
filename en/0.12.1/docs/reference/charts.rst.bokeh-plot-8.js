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
      };var element = document.getElementById("80d028c0-f4d4-49b0-b66f-af17b0d8511b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '80d028c0-f4d4-49b0-b66f-af17b0d8511b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"b787fb4b-3e2f-45da-a816-378554c70640":{"roots":{"references":[{"attributes":{"plot":null,"text":"line"},"id":"f29d67c5-50e7-46da-a0c7-b322a1b3fb86","type":"Title"},{"attributes":{"data_source":{"id":"77c88b15-30ff-4e41-9bd1-99e4c53e8330","type":"ColumnDataSource"},"glyph":{"id":"4e88eb8d-d85d-484b-9bcd-67a73c0a0451","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"681db171-11f3-456f-87da-82fa5e8efb10","type":"GlyphRenderer"},{"attributes":{},"id":"ae19ba03-c8d3-478c-a98d-744b46c8b6ca","type":"BasicTickFormatter"},{"attributes":{"legends":[["a",[{"id":"5c415178-74ea-4c18-b93d-3da633526494","type":"GlyphRenderer"}]],["b",[{"id":"681db171-11f3-456f-87da-82fa5e8efb10","type":"GlyphRenderer"}]],["c",[{"id":"c4e8e247-5cce-4bfd-a80d-82d95e925500","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"}},"id":"797f501c-1fde-4da1-96c6-b218361b4dc1","type":"Legend"},{"attributes":{"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"}},"id":"6c3421b8-78f0-40d7-9919-c97537d744cf","type":"ResetTool"},{"attributes":{"callback":null,"end":4.4,"start":-0.4},"id":"1f7e1476-9e45-4f59-99f1-6c42da3576dc","type":"Range1d"},{"attributes":{"data_source":{"id":"2d87446f-06a0-4ac1-a55f-bb6151c8130b","type":"ColumnDataSource"},"glyph":{"id":"7ac0ce75-6a9a-475f-8a04-849eea21971f","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c4e8e247-5cce-4bfd-a80d-82d95e925500","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cfb8a80a-ced2-442f-975f-266737052c4d","type":"PanTool"},{"id":"10f5c4b3-f0a5-4c83-9001-d8c02950b41f","type":"WheelZoomTool"},{"id":"f2e662ad-be1c-4bce-9d9c-9b2deb8c16ee","type":"BoxZoomTool"},{"id":"57b947cf-666f-42d2-a76e-f1fad23f26e6","type":"SaveTool"},{"id":"6c3421b8-78f0-40d7-9919-c97537d744cf","type":"ResetTool"},{"id":"0f2a8ac1-a765-4135-a2b2-8d5208a0e6c2","type":"HelpTool"}]},"id":"427478f7-aa76-4c04-9c96-aef36b4f909e","type":"Toolbar"},{"attributes":{},"id":"740659e9-564a-4ef4-9b18-1cb78cc88aeb","type":"BasicTicker"},{"attributes":{"below":[{"id":"19c0ff9c-9744-452c-bc43-4389bdbf8b4b","type":"LinearAxis"}],"height":400,"left":[{"id":"275cf17b-d803-43ff-947c-020f77cac26e","type":"LinearAxis"}],"renderers":[{"id":"398b9c8f-dd7e-444c-aee6-541a3ab76c9b","type":"BoxAnnotation"},{"id":"5c415178-74ea-4c18-b93d-3da633526494","type":"GlyphRenderer"},{"id":"681db171-11f3-456f-87da-82fa5e8efb10","type":"GlyphRenderer"},{"id":"c4e8e247-5cce-4bfd-a80d-82d95e925500","type":"GlyphRenderer"},{"id":"797f501c-1fde-4da1-96c6-b218361b4dc1","type":"Legend"},{"id":"19c0ff9c-9744-452c-bc43-4389bdbf8b4b","type":"LinearAxis"},{"id":"275cf17b-d803-43ff-947c-020f77cac26e","type":"LinearAxis"},{"id":"520a687f-4ba8-4d73-a1f9-d4403618bd66","type":"Grid"},{"id":"eddeba33-2c9b-4952-aa9b-d2df0c0018bd","type":"Grid"}],"title":{"id":"f29d67c5-50e7-46da-a0c7-b322a1b3fb86","type":"Title"},"tool_events":{"id":"dc43ace3-0f1e-43f2-b0ff-c2f02056127b","type":"ToolEvents"},"toolbar":{"id":"427478f7-aa76-4c04-9c96-aef36b4f909e","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"1f7e1476-9e45-4f59-99f1-6c42da3576dc","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b57a8015-2562-4a33-ab6c-3e85abe6d4a6","type":"Range1d"}},"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"dc43ace3-0f1e-43f2-b0ff-c2f02056127b","type":"ToolEvents"},{"attributes":{},"id":"a5424d44-474c-434c-a06e-3b8b67d35076","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"}],"series":["a","a","a","a","a"],"x_values":[0,1,2,3,4],"y_values":[2,3,7,5,26]}},"id":"7184979f-3ccc-4e95-b79a-fd9497a449d9","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"534c1f3f-c2b1-475d-82cf-fbf729b4a642","type":"Line"},{"attributes":{"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"}},"id":"cfb8a80a-ced2-442f-975f-266737052c4d","type":"PanTool"},{"attributes":{"callback":null,"end":138.4,"start":-10.4},"id":"b57a8015-2562-4a33-ab6c-3e85abe6d4a6","type":"Range1d"},{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"7ac0ce75-6a9a-475f-8a04-849eea21971f","type":"Line"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"}],"series":["b","b","b","b","b"],"x_values":[0,1,2,3,4],"y_values":[12,33,47,15,126]}},"id":"77c88b15-30ff-4e41-9bd1-99e4c53e8330","type":"ColumnDataSource"},{"attributes":{"axis_label":"Languages","formatter":{"id":"ae19ba03-c8d3-478c-a98d-744b46c8b6ca","type":"BasicTickFormatter"},"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"},"ticker":{"id":"c37336ac-1527-435b-8855-c5df829ba0a4","type":"BasicTicker"}},"id":"275cf17b-d803-43ff-947c-020f77cac26e","type":"LinearAxis"},{"attributes":{},"id":"c37336ac-1527-435b-8855-c5df829ba0a4","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7184979f-3ccc-4e95-b79a-fd9497a449d9","type":"ColumnDataSource"},"glyph":{"id":"534c1f3f-c2b1-475d-82cf-fbf729b4a642","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5c415178-74ea-4c18-b93d-3da633526494","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"}],"series":["c","c","c","c","c"],"x_values":[0,1,2,3,4],"y_values":[22,43,10,25,26]}},"id":"2d87446f-06a0-4ac1-a55f-bb6151c8130b","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"4e88eb8d-d85d-484b-9bcd-67a73c0a0451","type":"Line"},{"attributes":{"axis_label":"index","formatter":{"id":"a5424d44-474c-434c-a06e-3b8b67d35076","type":"BasicTickFormatter"},"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"},"ticker":{"id":"740659e9-564a-4ef4-9b18-1cb78cc88aeb","type":"BasicTicker"}},"id":"19c0ff9c-9744-452c-bc43-4389bdbf8b4b","type":"LinearAxis"},{"attributes":{"overlay":{"id":"398b9c8f-dd7e-444c-aee6-541a3ab76c9b","type":"BoxAnnotation"},"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"}},"id":"f2e662ad-be1c-4bce-9d9c-9b2deb8c16ee","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"}},"id":"10f5c4b3-f0a5-4c83-9001-d8c02950b41f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"},"ticker":{"id":"740659e9-564a-4ef4-9b18-1cb78cc88aeb","type":"BasicTicker"}},"id":"520a687f-4ba8-4d73-a1f9-d4403618bd66","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"398b9c8f-dd7e-444c-aee6-541a3ab76c9b","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"},"ticker":{"id":"c37336ac-1527-435b-8855-c5df829ba0a4","type":"BasicTicker"}},"id":"eddeba33-2c9b-4952-aa9b-d2df0c0018bd","type":"Grid"},{"attributes":{"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"}},"id":"57b947cf-666f-42d2-a76e-f1fad23f26e6","type":"SaveTool"},{"attributes":{"plot":{"id":"c391d37d-e1bc-471e-a1c5-fafe348dccf6","subtype":"Chart","type":"Plot"}},"id":"0f2a8ac1-a765-4135-a2b2-8d5208a0e6c2","type":"HelpTool"}],"root_ids":["c391d37d-e1bc-471e-a1c5-fafe348dccf6"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"b787fb4b-3e2f-45da-a816-378554c70640","elementid":"80d028c0-f4d4-49b0-b66f-af17b0d8511b","modelid":"c391d37d-e1bc-471e-a1c5-fafe348dccf6"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
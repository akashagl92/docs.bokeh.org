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
      };var element = document.getElementById("41c0b424-d79b-46e7-a880-dce46e9bfea7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '41c0b424-d79b-46e7-a880-dce46e9bfea7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"212c79c4-35f7-4f2d-8ad5-eaa471adf580":{"roots":{"references":[{"attributes":{"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"}},"id":"acb0f745-34fc-44bd-a0a8-9d5a9fa5caef","type":"ResetTool"},{"attributes":{"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"}},"id":"d54ea5d0-6f31-48a9-9d09-bb1debc51adb","type":"SaveTool"},{"attributes":{"items":[{"id":"4ec64af8-5155-472c-98ac-bb49bbd78dbb","type":"LegendItem"},{"id":"0ff22f63-7b99-49e4-a9b5-15f7875ea593","type":"LegendItem"},{"id":"8aa42310-e1af-4d94-bb39-a966178b9fba","type":"LegendItem"},{"id":"8f6ab9a1-4870-42c3-98ea-5a077c0bc322","type":"LegendItem"}],"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"}},"id":"821bf49e-5afd-4c17-b362-39834a0e02e4","type":"Legend"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"1846f2cd-7291-4578-932b-b14b65d4be51","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b37089e-debe-4236-a925-ff42e8add612","type":"Line"},{"attributes":{"below":[{"id":"6a8ebd5b-3d80-4d2e-9572-9434ac392f7a","type":"LinearAxis"}],"left":[{"id":"38f70f57-9f22-41b6-a49c-ee9797d099d2","type":"LogAxis"}],"renderers":[{"id":"6a8ebd5b-3d80-4d2e-9572-9434ac392f7a","type":"LinearAxis"},{"id":"58d9fcf7-4572-47ab-8aca-419f363e48cb","type":"Grid"},{"id":"38f70f57-9f22-41b6-a49c-ee9797d099d2","type":"LogAxis"},{"id":"a307bbe2-1aab-4b34-9da5-e31e1629fe68","type":"Grid"},{"id":"90b68c88-5c1e-4441-b368-e841a1791937","type":"BoxAnnotation"},{"id":"821bf49e-5afd-4c17-b362-39834a0e02e4","type":"Legend"},{"id":"c2615c21-f58a-4a2c-b161-57954cf799a2","type":"GlyphRenderer"},{"id":"b8684ed4-8ef2-4338-aac3-946a586c1a0d","type":"GlyphRenderer"},{"id":"12df3dd4-3dcd-4fae-9bdb-b7e4b5cb4790","type":"GlyphRenderer"},{"id":"684b8b86-e40d-41f3-b7d0-0d2ce27be78c","type":"GlyphRenderer"},{"id":"edb7dba9-d910-40a5-8c4f-9070ec78fbca","type":"GlyphRenderer"},{"id":"0c5c7858-03b0-40df-9b27-10920c648b20","type":"GlyphRenderer"}],"title":{"id":"8d7e0a2d-7e61-45e1-bc9d-7ea963d48c0a","type":"Title"},"tool_events":{"id":"4593adf5-1a53-43c3-9e82-a96e53add264","type":"ToolEvents"},"toolbar":{"id":"9d710d0e-6e75-4519-8566-3bea95c3abef","type":"Toolbar"},"x_range":{"id":"2286c71c-7793-46be-8997-38fed9686569","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"2935f38e-0612-4ed3-816f-3998eb0f1346","type":"Range1d"}},"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"223553ef-d65f-4ca5-ac8c-d2354e30eafd","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"223553ef-d65f-4ca5-ac8c-d2354e30eafd","type":"ColumnDataSource"},"glyph":{"id":"3f3decf9-cc05-41a6-aaea-281f31993829","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2e7ff96f-9416-4e99-8c0e-e8304a87c3b7","type":"Line"},"selection_glyph":null},"id":"684b8b86-e40d-41f3-b7d0-0d2ce27be78c","type":"GlyphRenderer"},{"attributes":{},"id":"4593adf5-1a53-43c3-9e82-a96e53add264","type":"ToolEvents"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"12df3dd4-3dcd-4fae-9bdb-b7e4b5cb4790","type":"GlyphRenderer"}]},"id":"0ff22f63-7b99-49e4-a9b5-15f7875ea593","type":"LegendItem"},{"attributes":{},"id":"37d35e5d-a4d1-4199-8768-e8752aa3fe08","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"e005e90b-b922-41f2-804c-c624d8a19cf1","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"c5c86e37-5168-4c90-b36b-9413c453cf60","type":"Line"},{"attributes":{"axis_label":"sections","formatter":{"id":"efd651db-7e6f-44c0-a6ea-40e8fae53472","type":"BasicTickFormatter"},"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"},"ticker":{"id":"37d35e5d-a4d1-4199-8768-e8752aa3fe08","type":"BasicTicker"}},"id":"6a8ebd5b-3d80-4d2e-9572-9434ac392f7a","type":"LinearAxis"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"684b8b86-e40d-41f3-b7d0-0d2ce27be78c","type":"GlyphRenderer"},{"id":"edb7dba9-d910-40a5-8c4f-9070ec78fbca","type":"GlyphRenderer"}]},"id":"8aa42310-e1af-4d94-bb39-a966178b9fba","type":"LegendItem"},{"attributes":{"data_source":{"id":"ea5afded-7919-4469-a3d1-b2e0f6fa6cdb","type":"ColumnDataSource"},"glyph":{"id":"fadf3ffb-924a-46d8-8b88-ac098bee10fb","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"018a5464-71dd-4de7-95b4-a0959246a47f","type":"Line"},"selection_glyph":null},"id":"c2615c21-f58a-4a2c-b161-57954cf799a2","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3ba40c9-a793-4336-9090-8556285eef29","type":"LogTicker"}},"id":"a307bbe2-1aab-4b34-9da5-e31e1629fe68","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"6a9eb834-5097-4569-a4b8-9a2e0ee3125d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6a9eb834-5097-4569-a4b8-9a2e0ee3125d","type":"ColumnDataSource"},"glyph":{"id":"fc523661-8a7a-4a78-918a-35e55897b3b5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc3d55ba-d68f-46f1-8836-6fc431158299","type":"Circle"},"selection_glyph":null},"id":"edb7dba9-d910-40a5-8c4f-9070ec78fbca","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"}},"id":"4dab08a6-721a-432b-8a0f-18053f456e84","type":"PanTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fadf3ffb-924a-46d8-8b88-ac098bee10fb","type":"Line"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"c2615c21-f58a-4a2c-b161-57954cf799a2","type":"GlyphRenderer"},{"id":"b8684ed4-8ef2-4338-aac3-946a586c1a0d","type":"GlyphRenderer"}]},"id":"4ec64af8-5155-472c-98ac-bb49bbd78dbb","type":"LegendItem"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"018a5464-71dd-4de7-95b4-a0959246a47f","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"e01d4c18-59ab-4003-82e0-8716ca8b307d","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"90b68c88-5c1e-4441-b368-e841a1791937","type":"BoxAnnotation"},"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"}},"id":"4d9bc333-f28f-4e68-95bf-dd26edaa7355","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ee59dbe-1678-4764-b5b7-4a970e61baba","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"ea5afded-7919-4469-a3d1-b2e0f6fa6cdb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e01d4c18-59ab-4003-82e0-8716ca8b307d","type":"ColumnDataSource"},"glyph":{"id":"49ad554f-2b0f-48a6-b4f5-6b9aba1c0446","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3b37089e-debe-4236-a925-ff42e8add612","type":"Line"},"selection_glyph":null},"id":"12df3dd4-3dcd-4fae-9bdb-b7e4b5cb4790","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"log axis example"},"id":"8d7e0a2d-7e61-45e1-bc9d-7ea963d48c0a","type":"Title"},{"attributes":{"num_minor_ticks":10},"id":"e3ba40c9-a793-4336-9090-8556285eef29","type":"LogTicker"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"2935f38e-0612-4ed3-816f-3998eb0f1346","type":"Range1d"},{"attributes":{"data_source":{"id":"1846f2cd-7291-4578-932b-b14b65d4be51","type":"ColumnDataSource"},"glyph":{"id":"d8aaa04d-0fda-49f3-8b59-1e8949ae341c","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c5c86e37-5168-4c90-b36b-9413c453cf60","type":"Line"},"selection_glyph":null},"id":"0c5c7858-03b0-40df-9b27-10920c648b20","type":"GlyphRenderer"},{"attributes":{"ticker":null},"id":"223666ba-0867-42be-950a-3bb1ed019e93","type":"LogTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"49ad554f-2b0f-48a6-b4f5-6b9aba1c0446","type":"Line"},{"attributes":{"data_source":{"id":"e005e90b-b922-41f2-804c-c624d8a19cf1","type":"ColumnDataSource"},"glyph":{"id":"a91d5457-fc0f-40af-b47f-682e9ad459e0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8ee59dbe-1678-4764-b5b7-4a970e61baba","type":"Circle"},"selection_glyph":null},"id":"b8684ed4-8ef2-4338-aac3-946a586c1a0d","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc523661-8a7a-4a78-918a-35e55897b3b5","type":"Circle"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"d8aaa04d-0fda-49f3-8b59-1e8949ae341c","type":"Line"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"0c5c7858-03b0-40df-9b27-10920c648b20","type":"GlyphRenderer"}]},"id":"8f6ab9a1-4870-42c3-98ea-5a077c0bc322","type":"LegendItem"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2e7ff96f-9416-4e99-8c0e-e8304a87c3b7","type":"Line"},{"attributes":{"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"},"ticker":{"id":"37d35e5d-a4d1-4199-8768-e8752aa3fe08","type":"BasicTicker"}},"id":"58d9fcf7-4572-47ab-8aca-419f363e48cb","type":"Grid"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"a91d5457-fc0f-40af-b47f-682e9ad459e0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc3d55ba-d68f-46f1-8836-6fc431158299","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4dab08a6-721a-432b-8a0f-18053f456e84","type":"PanTool"},{"id":"4d9bc333-f28f-4e68-95bf-dd26edaa7355","type":"BoxZoomTool"},{"id":"acb0f745-34fc-44bd-a0a8-9d5a9fa5caef","type":"ResetTool"},{"id":"d54ea5d0-6f31-48a9-9d09-bb1debc51adb","type":"SaveTool"}]},"id":"9d710d0e-6e75-4519-8566-3bea95c3abef","type":"Toolbar"},{"attributes":{},"id":"efd651db-7e6f-44c0-a6ea-40e8fae53472","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"90b68c88-5c1e-4441-b368-e841a1791937","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"2286c71c-7793-46be-8997-38fed9686569","type":"DataRange1d"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f3decf9-cc05-41a6-aaea-281f31993829","type":"Line"},{"attributes":{"axis_label":"particles","formatter":{"id":"223666ba-0867-42be-950a-3bb1ed019e93","type":"LogTickFormatter"},"plot":{"id":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3ba40c9-a793-4336-9090-8556285eef29","type":"LogTicker"}},"id":"38f70f57-9f22-41b6-a49c-ee9797d099d2","type":"LogAxis"}],"root_ids":["4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"212c79c4-35f7-4f2d-8ad5-eaa471adf580","elementid":"41c0b424-d79b-46e7-a880-dce46e9bfea7","modelid":"4f1ac7ce-6dfc-4f1c-9b81-a8edaca31c52"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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

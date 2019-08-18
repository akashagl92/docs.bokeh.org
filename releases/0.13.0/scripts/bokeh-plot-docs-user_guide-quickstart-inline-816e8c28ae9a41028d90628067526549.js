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
      };var element = document.getElementById("d0aa0728-a427-4fcc-bc77-fbad799e8b98");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd0aa0728-a427-4fcc-bc77-fbad799e8b98' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5c032512-6d73-426e-8028-2c4ca78e095b":{"roots":{"references":[{"attributes":{},"id":"093e8889-f427-4bc4-9fc9-92184d8ef22f","type":"SaveTool"},{"attributes":{"source":{"id":"20333def-3709-49fc-842a-c02ca0a25f02","type":"ColumnDataSource"}},"id":"4c4ac63b-6420-4ee6-89b8-c8d9b1dabf0b","type":"CDSView"},{"attributes":{},"id":"c3640f40-8283-4c26-9a3c-f6797df70b26","type":"Selection"},{"attributes":{},"id":"365d30e0-d98f-43d1-ae3f-064364041c93","type":"LogScale"},{"attributes":{},"id":"7d84e65b-990e-4dbc-a25f-befe552efef0","type":"PanTool"},{"attributes":{},"id":"a40d1faf-f5fd-4e61-bda3-830b732f3ec9","type":"UnionRenderers"},{"attributes":{"below":[{"id":"10528d1a-27a5-4b80-be45-ce059ee865d0","type":"LinearAxis"}],"left":[{"id":"f8666f26-8218-40bd-9cc3-1fd0107bd259","type":"LogAxis"}],"renderers":[{"id":"10528d1a-27a5-4b80-be45-ce059ee865d0","type":"LinearAxis"},{"id":"a9fbe18b-1cdd-4895-8a59-b2e8d42f2778","type":"Grid"},{"id":"f8666f26-8218-40bd-9cc3-1fd0107bd259","type":"LogAxis"},{"id":"1c136f60-a5e0-4775-8b66-1c0fa02f5bc7","type":"Grid"},{"id":"6814b00f-534a-4f86-9ab6-dc060e3d5c73","type":"BoxAnnotation"},{"id":"d8b5fe53-2ec2-490f-97d4-28a460059a4e","type":"Legend"},{"id":"80ca97ef-3677-4f17-b46f-6dda11623188","type":"GlyphRenderer"},{"id":"66715eef-77a7-4582-b23b-4cb6a9c4d09e","type":"GlyphRenderer"},{"id":"d833d3c1-b11a-49f9-b1c9-d1b92c4d8359","type":"GlyphRenderer"},{"id":"ecac87fa-5fc7-4550-b96e-698443181648","type":"GlyphRenderer"},{"id":"80e3811d-9b14-4574-b8a8-64461a2cc986","type":"GlyphRenderer"},{"id":"06938012-8db0-46df-9316-3a3696f440bd","type":"GlyphRenderer"}],"title":{"id":"b59850c0-313a-498b-85a4-2b3a1816f839","type":"Title"},"toolbar":{"id":"7e5d467c-c273-428a-b2ed-a17c0149fe71","type":"Toolbar"},"x_range":{"id":"184a635f-1cc3-423b-889c-f84430715600","type":"DataRange1d"},"x_scale":{"id":"1f913a20-fd10-439e-a3e6-66b4b835b652","type":"LinearScale"},"y_range":{"id":"675ca153-465c-46b2-93e0-7fadb92d414c","type":"Range1d"},"y_scale":{"id":"365d30e0-d98f-43d1-ae3f-064364041c93","type":"LogScale"}},"id":"7b4127f7-c44c-4fc8-86f9-b387027ba4ba","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"ceae4b3c-21d5-450d-917c-7d64f8a47734","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"846cd391-80c1-440a-b85e-21f2c007e74f","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6814b00f-534a-4f86-9ab6-dc060e3d5c73","type":"BoxAnnotation"},{"attributes":{"ticker":null},"id":"8675e4c7-ccaf-438a-bfa9-74563214b362","type":"LogTickFormatter"},{"attributes":{},"id":"1949b28c-a426-4b82-aefd-a47c1176ba59","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"ecb83163-745f-462e-99ba-95ca27d63e26","type":"Circle"},{"attributes":{},"id":"1f913a20-fd10-439e-a3e6-66b4b835b652","type":"LinearScale"},{"attributes":{"data_source":{"id":"e6c47dca-a85c-42fb-913c-7b5b3ab469a1","type":"ColumnDataSource"},"glyph":{"id":"ceae4b3c-21d5-450d-917c-7d64f8a47734","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ad4d9f9b-e531-46b0-8715-221938cab938","type":"Line"},"selection_glyph":null,"view":{"id":"7092d038-3d54-400a-82fb-28c566ddb31b","type":"CDSView"}},"id":"d833d3c1-b11a-49f9-b1c9-d1b92c4d8359","type":"GlyphRenderer"},{"attributes":{"axis_label":"sections","formatter":{"id":"c3b3b92e-85ba-4c9c-8383-17793776d2be","type":"BasicTickFormatter"},"plot":{"id":"7b4127f7-c44c-4fc8-86f9-b387027ba4ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"aea58e26-b259-446a-9793-9d19d4eeca1d","type":"BasicTicker"}},"id":"10528d1a-27a5-4b80-be45-ce059ee865d0","type":"LinearAxis"},{"attributes":{"data_source":{"id":"298340fe-4f0f-4014-b6f2-3366429c6f90","type":"ColumnDataSource"},"glyph":{"id":"0a284121-287f-4a14-b328-c5b9b5ce7bc0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7dfe6a3e-0ab1-4281-bf71-420332b823a4","type":"Line"},"selection_glyph":null,"view":{"id":"bda40e45-fb5e-497d-a169-81061b27122a","type":"CDSView"}},"id":"06938012-8db0-46df-9316-3a3696f440bd","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"2c8b4470-130a-4cd5-bfff-63b56bb90ea4","type":"Selection"},"selection_policy":{"id":"f77a9d33-2074-4cfa-b9a7-3f30995df378","type":"UnionRenderers"}},"id":"fad3de25-36f0-462f-beeb-4f326c377938","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"6814b00f-534a-4f86-9ab6-dc060e3d5c73","type":"BoxAnnotation"}},"id":"b7fef5c6-948c-46f2-a905-88a196946ebc","type":"BoxZoomTool"},{"attributes":{"items":[{"id":"3154bae4-7aba-4bda-aaaf-227a10381f5a","type":"LegendItem"},{"id":"24b3a5b2-3246-469a-b89e-b40551021fa8","type":"LegendItem"},{"id":"965c9a43-43d6-4174-94f9-b00bf8f7b493","type":"LegendItem"},{"id":"71a5e895-258e-459b-a192-f5cf4d6810d5","type":"LegendItem"}],"plot":{"id":"7b4127f7-c44c-4fc8-86f9-b387027ba4ba","subtype":"Figure","type":"Plot"}},"id":"d8b5fe53-2ec2-490f-97d4-28a460059a4e","type":"Legend"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f5ffe69b-2ce3-4202-aca9-37f2cbe90238","type":"Circle"},{"attributes":{"num_minor_ticks":10},"id":"6944f716-da86-467b-a313-b55948b3b9c6","type":"LogTicker"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]},"selected":{"id":"ac5363a5-e0c0-4e57-bcf7-3cfd1c9f06ea","type":"Selection"},"selection_policy":{"id":"f10d7d7e-269d-4932-b013-7aa82f0c3c41","type":"UnionRenderers"}},"id":"e6c47dca-a85c-42fb-913c-7b5b3ab469a1","type":"ColumnDataSource"},{"attributes":{},"id":"97ca3f35-5715-4931-8213-e35c9baad3a7","type":"Selection"},{"attributes":{"source":{"id":"1b77af33-23e2-4c2e-ba0a-c366f325651d","type":"ColumnDataSource"}},"id":"091d5aca-508b-4ff2-bef3-7ea538d084f4","type":"CDSView"},{"attributes":{},"id":"1028dbf7-2898-44f5-aaa4-83f57f139568","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]},"selected":{"id":"dbaf2c9d-85dc-4222-ac13-a590959a4619","type":"Selection"},"selection_policy":{"id":"1949b28c-a426-4b82-aefd-a47c1176ba59","type":"UnionRenderers"}},"id":"1b77af33-23e2-4c2e-ba0a-c366f325651d","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"7dfe6a3e-0ab1-4281-bf71-420332b823a4","type":"Line"},{"attributes":{"plot":{"id":"7b4127f7-c44c-4fc8-86f9-b387027ba4ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"aea58e26-b259-446a-9793-9d19d4eeca1d","type":"BasicTicker"}},"id":"a9fbe18b-1cdd-4895-8a59-b2e8d42f2778","type":"Grid"},{"attributes":{"source":{"id":"298340fe-4f0f-4014-b6f2-3366429c6f90","type":"ColumnDataSource"}},"id":"bda40e45-fb5e-497d-a169-81061b27122a","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7d84e65b-990e-4dbc-a25f-befe552efef0","type":"PanTool"},{"id":"b7fef5c6-948c-46f2-a905-88a196946ebc","type":"BoxZoomTool"},{"id":"1028dbf7-2898-44f5-aaa4-83f57f139568","type":"ResetTool"},{"id":"093e8889-f427-4bc4-9fc9-92184d8ef22f","type":"SaveTool"}]},"id":"7e5d467c-c273-428a-b2ed-a17c0149fe71","type":"Toolbar"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"caf017f2-c1fc-4692-8b47-314b59eeaae3","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"fa67c6d4-5f94-456c-8796-b20c62f61242","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"cd158af6-7400-4fc2-8f1c-b43b3d36e085","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a79c0ad-1164-42bd-9662-5bd7f1b7df11","type":"Circle"},{"attributes":{},"id":"3b1d9b41-1568-4d55-9aa8-e9845e3bfc2f","type":"UnionRenderers"},{"attributes":{"source":{"id":"e6c47dca-a85c-42fb-913c-7b5b3ab469a1","type":"ColumnDataSource"}},"id":"7092d038-3d54-400a-82fb-28c566ddb31b","type":"CDSView"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"d833d3c1-b11a-49f9-b1c9-d1b92c4d8359","type":"GlyphRenderer"}]},"id":"24b3a5b2-3246-469a-b89e-b40551021fa8","type":"LegendItem"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18ca94f2-7e90-44bc-b3f4-f66178e39441","type":"Line"},{"attributes":{},"id":"ac5363a5-e0c0-4e57-bcf7-3cfd1c9f06ea","type":"Selection"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"06938012-8db0-46df-9316-3a3696f440bd","type":"GlyphRenderer"}]},"id":"71a5e895-258e-459b-a192-f5cf4d6810d5","type":"LegendItem"},{"attributes":{"source":{"id":"c4e9ccba-f2d4-4966-acfe-929e1fbbb386","type":"ColumnDataSource"}},"id":"07b1e7f4-d699-418e-9b5c-1fd3764e705e","type":"CDSView"},{"attributes":{"plot":null,"text":"log axis example"},"id":"b59850c0-313a-498b-85a4-2b3a1816f839","type":"Title"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"80ca97ef-3677-4f17-b46f-6dda11623188","type":"GlyphRenderer"},{"id":"66715eef-77a7-4582-b23b-4cb6a9c4d09e","type":"GlyphRenderer"}]},"id":"3154bae4-7aba-4bda-aaaf-227a10381f5a","type":"LegendItem"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"97ca3f35-5715-4931-8213-e35c9baad3a7","type":"Selection"},"selection_policy":{"id":"3b1d9b41-1568-4d55-9aa8-e9845e3bfc2f","type":"UnionRenderers"}},"id":"c4e9ccba-f2d4-4966-acfe-929e1fbbb386","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1b77af33-23e2-4c2e-ba0a-c366f325651d","type":"ColumnDataSource"},"glyph":{"id":"846cd391-80c1-440a-b85e-21f2c007e74f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ecb83163-745f-462e-99ba-95ca27d63e26","type":"Circle"},"selection_glyph":null,"view":{"id":"091d5aca-508b-4ff2-bef3-7ea538d084f4","type":"CDSView"}},"id":"66715eef-77a7-4582-b23b-4cb6a9c4d09e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"20333def-3709-49fc-842a-c02ca0a25f02","type":"ColumnDataSource"},"glyph":{"id":"caf017f2-c1fc-4692-8b47-314b59eeaae3","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd158af6-7400-4fc2-8f1c-b43b3d36e085","type":"Line"},"selection_glyph":null,"view":{"id":"4c4ac63b-6420-4ee6-89b8-c8d9b1dabf0b","type":"CDSView"}},"id":"ecac87fa-5fc7-4550-b96e-698443181648","type":"GlyphRenderer"},{"attributes":{},"id":"f77a9d33-2074-4cfa-b9a7-3f30995df378","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"7b4127f7-c44c-4fc8-86f9-b387027ba4ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"6944f716-da86-467b-a313-b55948b3b9c6","type":"LogTicker"}},"id":"1c136f60-a5e0-4775-8b66-1c0fa02f5bc7","type":"Grid"},{"attributes":{},"id":"2c8b4470-130a-4cd5-bfff-63b56bb90ea4","type":"Selection"},{"attributes":{},"id":"dbaf2c9d-85dc-4222-ac13-a590959a4619","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"ad4d9f9b-e531-46b0-8715-221938cab938","type":"Line"},{"attributes":{},"id":"c3b3b92e-85ba-4c9c-8383-17793776d2be","type":"BasicTickFormatter"},{"attributes":{"axis_label":"particles","formatter":{"id":"8675e4c7-ccaf-438a-bfa9-74563214b362","type":"LogTickFormatter"},"plot":{"id":"7b4127f7-c44c-4fc8-86f9-b387027ba4ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"6944f716-da86-467b-a313-b55948b3b9c6","type":"LogTicker"}},"id":"f8666f26-8218-40bd-9cc3-1fd0107bd259","type":"LogAxis"},{"attributes":{"data_source":{"id":"c4e9ccba-f2d4-4966-acfe-929e1fbbb386","type":"ColumnDataSource"},"glyph":{"id":"f5ffe69b-2ce3-4202-aca9-37f2cbe90238","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4a79c0ad-1164-42bd-9662-5bd7f1b7df11","type":"Circle"},"selection_glyph":null,"view":{"id":"07b1e7f4-d699-418e-9b5c-1fd3764e705e","type":"CDSView"}},"id":"80e3811d-9b14-4574-b8a8-64461a2cc986","type":"GlyphRenderer"},{"attributes":{},"id":"f10d7d7e-269d-4932-b013-7aa82f0c3c41","type":"UnionRenderers"},{"attributes":{"line_color":"orange","line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"0a284121-287f-4a14-b328-c5b9b5ce7bc0","type":"Line"},{"attributes":{},"id":"4d6b9e45-74f8-4e2b-b0c3-18319103b4e9","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"fad3de25-36f0-462f-beeb-4f326c377938","type":"ColumnDataSource"},"glyph":{"id":"18ca94f2-7e90-44bc-b3f4-f66178e39441","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa67c6d4-5f94-456c-8796-b20c62f61242","type":"Line"},"selection_glyph":null,"view":{"id":"f4910b58-459b-43d2-b3db-4ee814754c0d","type":"CDSView"}},"id":"80ca97ef-3677-4f17-b46f-6dda11623188","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"675ca153-465c-46b2-93e0-7fadb92d414c","type":"Range1d"},{"attributes":{},"id":"aea58e26-b259-446a-9793-9d19d4eeca1d","type":"BasicTicker"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"ecac87fa-5fc7-4550-b96e-698443181648","type":"GlyphRenderer"},{"id":"80e3811d-9b14-4574-b8a8-64461a2cc986","type":"GlyphRenderer"}]},"id":"965c9a43-43d6-4174-94f9-b00bf8f7b493","type":"LegendItem"},{"attributes":{},"id":"41eb5a64-ae3a-4901-b258-a77776dd9a9d","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"c3640f40-8283-4c26-9a3c-f6797df70b26","type":"Selection"},"selection_policy":{"id":"4d6b9e45-74f8-4e2b-b0c3-18319103b4e9","type":"UnionRenderers"}},"id":"20333def-3709-49fc-842a-c02ca0a25f02","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"184a635f-1cc3-423b-889c-f84430715600","type":"DataRange1d"},{"attributes":{"source":{"id":"fad3de25-36f0-462f-beeb-4f326c377938","type":"ColumnDataSource"}},"id":"f4910b58-459b-43d2-b3db-4ee814754c0d","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]},"selected":{"id":"41eb5a64-ae3a-4901-b258-a77776dd9a9d","type":"Selection"},"selection_policy":{"id":"a40d1faf-f5fd-4e61-bda3-830b732f3ec9","type":"UnionRenderers"}},"id":"298340fe-4f0f-4014-b6f2-3366429c6f90","type":"ColumnDataSource"}],"root_ids":["7b4127f7-c44c-4fc8-86f9-b387027ba4ba"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5c032512-6d73-426e-8028-2c4ca78e095b","roots":{"7b4127f7-c44c-4fc8-86f9-b387027ba4ba":"d0aa0728-a427-4fcc-bc77-fbad799e8b98"}}];
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
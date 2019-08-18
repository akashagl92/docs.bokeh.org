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
      };var element = document.getElementById("d3ebe00e-f549-45ca-993b-a06080577f68");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd3ebe00e-f549-45ca-993b-a06080577f68' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"27a3ceb0-2068-4e61-bc64-2cb731868f31":{"roots":{"references":[{"attributes":{"data_source":{"id":"db4f6230-6555-49de-987d-cb1088d97dc0","type":"ColumnDataSource"},"glyph":{"id":"a1cb47a3-8bd7-4e04-baad-1cff2184a1f4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0fdb77fa-bafd-477f-aa08-1b33ce1a0f3b","type":"GlyphRenderer"},{"attributes":{},"id":"bd557351-ac14-4bde-86d4-843e3efda695","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1ca40aa6-31b4-4f9b-bbe9-1bed55296c79","type":"Toolbar"},{"attributes":{},"id":"ad2fafb6-b25f-4921-8cfe-c5bc6ae97610","type":"ToolEvents"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"0c9af423-808b-48b0-89c5-f1ce1f22f37c","type":"BasicTickFormatter"},"plot":{"id":"ef4abad0-fbe2-4ace-a5b5-8d7c0eedc4a9","type":"Plot"},"ticker":{"id":"9427ea17-15e9-4584-a493-4843703b7a01","type":"BasicTicker"}},"id":"46a3ccdd-1fea-409b-853d-76e8d7f73adc","type":"LinearAxis"},{"attributes":{},"id":"0d786800-d56c-4072-a63a-54e8be242ed7","type":"BasicTicker"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"c018eebd-bda9-4a5c-8110-7ffc0d9fc451","type":"Range1d"},{"attributes":{},"id":"b91c27c8-74f6-417c-a8cc-3b1e9de3e2f5","type":"BasicTickFormatter"},{"attributes":{},"id":"a2d58cd4-b564-4f8a-977c-5c80a476d553","type":"BasicTicker"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"5d07f3de-03a4-408c-ac84-2e65779f58e6","type":"BasicTickFormatter"},"plot":{"id":"6caf6fad-e498-4589-9d65-f2a32001d948","type":"Plot"},"ticker":{"id":"154c5bfd-72a5-4885-a07d-7056f34218f8","type":"BasicTicker"}},"id":"b6247106-45f0-419c-9149-ac678dda6ba5","type":"LinearAxis"},{"attributes":{"data_source":{"id":"b6e798cc-5688-40bf-afa1-6914a1479dfe","type":"ColumnDataSource"},"glyph":{"id":"67f76efd-84a9-46f1-b31f-09e6364d8b0d","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c6771a16-bc0b-4ed8-b4f1-695c9215050e","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"67f76efd-84a9-46f1-b31f-09e6364d8b0d","type":"Line"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"92197fb0-6d87-4b94-83fb-7e0508faf973","type":"BasicTickFormatter"},"plot":{"id":"6caf6fad-e498-4589-9d65-f2a32001d948","type":"Plot"},"ticker":{"id":"9bd529fb-418b-4377-befd-44b9b4d5a192","type":"BasicTicker"}},"id":"14e678d5-8916-4365-b167-483fb340aaca","type":"LinearAxis"},{"attributes":{"plot":null,"text":"IV"},"id":"06c0c7ed-64a3-40ad-b927-292a6bb01d78","type":"Title"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"01ec363d-3a8e-4207-882b-7c13a842a2e8","type":"BasicTickFormatter"},"plot":{"id":"039b7ec1-66fb-46a3-ac4f-56f7fed176a4","type":"Plot"},"ticker":{"id":"c97c9b40-e2e2-49a2-a9c9-3cadd6f1a84e","type":"BasicTicker"}},"id":"c3b2156f-26d4-4ae4-89bc-7e71e3bc1ac6","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"febe1676-65c3-44b3-8209-e5ecbd2da19e","type":"Toolbar"},{"attributes":{},"id":"154c5bfd-72a5-4885-a07d-7056f34218f8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-0.5,1.8333333333333335,4.166666666666667,6.5,8.833333333333334,11.166666666666668,13.5,15.833333333333336,18.166666666666668,20.5],"y":[2.75,3.916666666666667,5.083333333333334,6.25,7.416666666666667,8.583333333333334,9.75,10.916666666666668,12.083333333333334,13.25]}},"id":"b6e798cc-5688-40bf-afa1-6914a1479dfe","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"III"},"id":"ecfad78e-e85e-4392-b297-6eaaeea3ed28","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"2c89c77f-240d-4d50-bb26-211ff09b0aa8","type":"Circle"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"14e678d5-8916-4365-b167-483fb340aaca","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"b6247106-45f0-419c-9149-ac678dda6ba5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14e678d5-8916-4365-b167-483fb340aaca","type":"LinearAxis"},{"id":"b6247106-45f0-419c-9149-ac678dda6ba5","type":"LinearAxis"},{"id":"952c20d0-7228-4ed0-bc08-62900607a3a5","type":"Grid"},{"id":"96509b88-39b3-4977-aa6e-c941f01d77c8","type":"Grid"},{"id":"b6201a43-7ff9-49ad-bcca-cf751a91703d","type":"GlyphRenderer"},{"id":"5831b7e3-5ca8-4ff8-94e4-65cabdf789dc","type":"GlyphRenderer"}],"title":{"id":"06c0c7ed-64a3-40ad-b927-292a6bb01d78","type":"Title"},"tool_events":{"id":"ad2fafb6-b25f-4921-8cfe-c5bc6ae97610","type":"ToolEvents"},"toolbar":{"id":"febe1676-65c3-44b3-8209-e5ecbd2da19e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c018eebd-bda9-4a5c-8110-7ffc0d9fc451","type":"Range1d"},"y_range":{"id":"9744d6e0-705f-4fd7-a037-ee2b1c6004ef","type":"Range1d"}},"id":"6caf6fad-e498-4589-9d65-f2a32001d948","type":"Plot"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"9744d6e0-705f-4fd7-a037-ee2b1c6004ef","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5c95a10d-76b1-4d2f-8ddb-9307bcf9a22a","type":"Toolbar"},{"attributes":{"plot":null,"text":"I"},"id":"4284d7c8-799f-4533-b879-de36eb025cbb","type":"Title"},{"attributes":{"children":[{"id":"74ec6f81-71ce-42fb-8381-12b553965a21","type":"Row"},{"id":"9cd882cc-87e3-4c19-a67e-c3fe677884d0","type":"Row"}]},"id":"b2540675-7b95-418c-94d4-0990e57c6635","type":"Column"},{"attributes":{},"id":"8139d23b-a911-4032-af40-8134bf9f0f4d","type":"ToolEvents"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b50184db-5049-4a45-bb24-d3fa4bd80042","type":"Line"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"cd93f021-bcc0-489e-b97c-978874151ce8","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"f293fa7d-ab43-4061-9e73-ae8ceeeb2a65","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cd93f021-bcc0-489e-b97c-978874151ce8","type":"LinearAxis"},{"id":"f293fa7d-ab43-4061-9e73-ae8ceeeb2a65","type":"LinearAxis"},{"id":"5f77ec4f-f53d-41c5-baa1-6cf3c3294160","type":"Grid"},{"id":"e0ff7156-b5fb-47e9-bdcb-782c6c748346","type":"Grid"},{"id":"1d35b33b-ab88-4d8e-aa85-94cec454d54d","type":"GlyphRenderer"},{"id":"0fdb77fa-bafd-477f-aa08-1b33ce1a0f3b","type":"GlyphRenderer"}],"title":{"id":"59918766-171f-4048-8e95-c73e74596ea3","type":"Title"},"tool_events":{"id":"3e732760-1d10-4be7-98e0-0457023ae677","type":"ToolEvents"},"toolbar":{"id":"5c95a10d-76b1-4d2f-8ddb-9307bcf9a22a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c018eebd-bda9-4a5c-8110-7ffc0d9fc451","type":"Range1d"},"y_range":{"id":"9744d6e0-705f-4fd7-a037-ee2b1c6004ef","type":"Range1d"}},"id":"e63046e4-b176-4db1-93ff-f72b484c4de2","type":"Plot"},{"attributes":{},"id":"0c9af423-808b-48b0-89c5-f1ce1f22f37c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"db4f6230-6555-49de-987d-cb1088d97dc0","type":"ColumnDataSource"},"glyph":{"id":"b80ca453-6260-4899-a4a4-1ba451880a1a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5831b7e3-5ca8-4ff8-94e4-65cabdf789dc","type":"GlyphRenderer"},{"attributes":{},"id":"1fd78437-399a-4cc7-8c2b-4680e08efe66","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"b80ca453-6260-4899-a4a4-1ba451880a1a","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d86402ea-6011-423e-9e2b-90f90be0618e","type":"Toolbar"},{"attributes":{"plot":null,"text":"II"},"id":"59918766-171f-4048-8e95-c73e74596ea3","type":"Title"},{"attributes":{"children":[{"id":"ef4abad0-fbe2-4ace-a5b5-8d7c0eedc4a9","type":"Plot"},{"id":"6caf6fad-e498-4589-9d65-f2a32001d948","type":"Plot"}]},"id":"9cd882cc-87e3-4c19-a67e-c3fe677884d0","type":"Row"},{"attributes":{"plot":{"id":"039b7ec1-66fb-46a3-ac4f-56f7fed176a4","type":"Plot"},"ticker":{"id":"1fd78437-399a-4cc7-8c2b-4680e08efe66","type":"BasicTicker"}},"id":"575c0d6b-157a-425d-be83-21f7e1878ee2","type":"Grid"},{"attributes":{},"id":"3e732760-1d10-4be7-98e0-0457023ae677","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"a1cb47a3-8bd7-4e04-baad-1cff2184a1f4","type":"Circle"},{"attributes":{},"id":"7584bfba-3468-46ed-9ab0-9261bbd5433f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["yiii","yi","xi","xii","yii","yiv","xiv","xiii"],"data":{"xi":[10.0,8.0,13.0,9.0,11.0,14.0,6.0,4.0,12.0,7.0,5.0],"xii":[10.0,8.0,13.0,9.0,11.0,14.0,6.0,4.0,12.0,7.0,5.0],"xiii":[10.0,8.0,13.0,9.0,11.0,14.0,6.0,4.0,12.0,7.0,5.0],"xiv":[8.0,8.0,8.0,8.0,8.0,8.0,8.0,19.0,8.0,8.0,8.0],"yi":[8.04,6.95,7.58,8.81,8.33,9.96,7.24,4.26,10.84,4.82,5.68],"yii":[9.14,8.14,8.74,8.77,9.26,8.1,6.13,3.1,9.13,7.26,4.74],"yiii":[7.46,6.77,12.74,7.11,7.81,8.84,6.08,5.39,8.15,6.42,5.73],"yiv":[6.58,5.76,7.71,8.84,8.47,7.04,5.25,12.5,5.56,7.91,6.89]}},"id":"db4f6230-6555-49de-987d-cb1088d97dc0","type":"ColumnDataSource"},{"attributes":{},"id":"92197fb0-6d87-4b94-83fb-7e0508faf973","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"7494b52b-22b8-4177-9a7a-e2c3ee1120cb","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"b91c27c8-74f6-417c-a8cc-3b1e9de3e2f5","type":"BasicTickFormatter"},"plot":{"id":"e63046e4-b176-4db1-93ff-f72b484c4de2","type":"Plot"},"ticker":{"id":"0d786800-d56c-4072-a63a-54e8be242ed7","type":"BasicTicker"}},"id":"cd93f021-bcc0-489e-b97c-978874151ce8","type":"LinearAxis"},{"attributes":{"data_source":{"id":"db4f6230-6555-49de-987d-cb1088d97dc0","type":"ColumnDataSource"},"glyph":{"id":"2c89c77f-240d-4d50-bb26-211ff09b0aa8","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d3c0df4e-4cd4-4fb7-95d8-4153629e9663","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e63046e4-b176-4db1-93ff-f72b484c4de2","type":"Plot"},"ticker":{"id":"0d786800-d56c-4072-a63a-54e8be242ed7","type":"BasicTicker"}},"id":"5f77ec4f-f53d-41c5-baa1-6cf3c3294160","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"039b7ec1-66fb-46a3-ac4f-56f7fed176a4","type":"Plot"},"ticker":{"id":"c97c9b40-e2e2-49a2-a9c9-3cadd6f1a84e","type":"BasicTicker"}},"id":"1d6be20e-c3e3-48ed-bda7-a6bba4dc54b4","type":"Grid"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"570b1974-8a34-4d0b-9b8a-745f78bc4c1b","type":"Line"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"7584bfba-3468-46ed-9ab0-9261bbd5433f","type":"BasicTickFormatter"},"plot":{"id":"039b7ec1-66fb-46a3-ac4f-56f7fed176a4","type":"Plot"},"ticker":{"id":"1fd78437-399a-4cc7-8c2b-4680e08efe66","type":"BasicTicker"}},"id":"b6632d5d-1372-431e-84db-40532b7857f8","type":"LinearAxis"},{"attributes":{},"id":"da10bd08-98a3-4ef8-983c-4a73d8b52953","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"46a3ccdd-1fea-409b-853d-76e8d7f73adc","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"5dca925d-ca7d-4a29-a0d3-a4db94afc573","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"46a3ccdd-1fea-409b-853d-76e8d7f73adc","type":"LinearAxis"},{"id":"5dca925d-ca7d-4a29-a0d3-a4db94afc573","type":"LinearAxis"},{"id":"3a08ac5c-e410-47a9-b1d9-63035a0c6658","type":"Grid"},{"id":"644cfb3a-d8a1-4baa-a0e5-454fc3f25bca","type":"Grid"},{"id":"c6771a16-bc0b-4ed8-b4f1-695c9215050e","type":"GlyphRenderer"},{"id":"d3c0df4e-4cd4-4fb7-95d8-4153629e9663","type":"GlyphRenderer"}],"title":{"id":"ecfad78e-e85e-4392-b297-6eaaeea3ed28","type":"Title"},"tool_events":{"id":"8840bd71-b680-496d-ac8a-9f0d625a23bd","type":"ToolEvents"},"toolbar":{"id":"d86402ea-6011-423e-9e2b-90f90be0618e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c018eebd-bda9-4a5c-8110-7ffc0d9fc451","type":"Range1d"},"y_range":{"id":"9744d6e0-705f-4fd7-a037-ee2b1c6004ef","type":"Range1d"}},"id":"ef4abad0-fbe2-4ace-a5b5-8d7c0eedc4a9","type":"Plot"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"479c6324-722d-4fd7-b9a1-ae9cfbfb966a","type":"Line"},{"attributes":{},"id":"37fd48ea-8c68-4736-9276-a63ea2d478fc","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"b6e798cc-5688-40bf-afa1-6914a1479dfe","type":"ColumnDataSource"},"glyph":{"id":"479c6324-722d-4fd7-b9a1-ae9cfbfb966a","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1d35b33b-ab88-4d8e-aa85-94cec454d54d","type":"GlyphRenderer"},{"attributes":{},"id":"9bd529fb-418b-4377-befd-44b9b4d5a192","type":"BasicTicker"},{"attributes":{},"id":"8840bd71-b680-496d-ac8a-9f0d625a23bd","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"6caf6fad-e498-4589-9d65-f2a32001d948","type":"Plot"},"ticker":{"id":"154c5bfd-72a5-4885-a07d-7056f34218f8","type":"BasicTicker"}},"id":"96509b88-39b3-4977-aa6e-c941f01d77c8","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"ef4abad0-fbe2-4ace-a5b5-8d7c0eedc4a9","type":"Plot"},"ticker":{"id":"a2d58cd4-b564-4f8a-977c-5c80a476d553","type":"BasicTicker"}},"id":"644cfb3a-d8a1-4baa-a0e5-454fc3f25bca","type":"Grid"},{"attributes":{},"id":"c97c9b40-e2e2-49a2-a9c9-3cadd6f1a84e","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"b6632d5d-1372-431e-84db-40532b7857f8","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"c3b2156f-26d4-4ae4-89bc-7e71e3bc1ac6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b6632d5d-1372-431e-84db-40532b7857f8","type":"LinearAxis"},{"id":"c3b2156f-26d4-4ae4-89bc-7e71e3bc1ac6","type":"LinearAxis"},{"id":"575c0d6b-157a-425d-be83-21f7e1878ee2","type":"Grid"},{"id":"1d6be20e-c3e3-48ed-bda7-a6bba4dc54b4","type":"Grid"},{"id":"489a3322-da84-46d7-b81a-8a70b053607b","type":"GlyphRenderer"},{"id":"ec5b6c9a-9311-4a12-bd3d-21afba02df87","type":"GlyphRenderer"}],"title":{"id":"4284d7c8-799f-4533-b879-de36eb025cbb","type":"Title"},"tool_events":{"id":"8139d23b-a911-4032-af40-8134bf9f0f4d","type":"ToolEvents"},"toolbar":{"id":"1ca40aa6-31b4-4f9b-bbe9-1bed55296c79","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c018eebd-bda9-4a5c-8110-7ffc0d9fc451","type":"Range1d"},"y_range":{"id":"9744d6e0-705f-4fd7-a037-ee2b1c6004ef","type":"Range1d"}},"id":"039b7ec1-66fb-46a3-ac4f-56f7fed176a4","type":"Plot"},{"attributes":{"plot":{"id":"ef4abad0-fbe2-4ace-a5b5-8d7c0eedc4a9","type":"Plot"},"ticker":{"id":"9427ea17-15e9-4584-a493-4843703b7a01","type":"BasicTicker"}},"id":"3a08ac5c-e410-47a9-b1d9-63035a0c6658","type":"Grid"},{"attributes":{"plot":{"id":"6caf6fad-e498-4589-9d65-f2a32001d948","type":"Plot"},"ticker":{"id":"9bd529fb-418b-4377-befd-44b9b4d5a192","type":"BasicTicker"}},"id":"952c20d0-7228-4ed0-bc08-62900607a3a5","type":"Grid"},{"attributes":{"data_source":{"id":"b6e798cc-5688-40bf-afa1-6914a1479dfe","type":"ColumnDataSource"},"glyph":{"id":"570b1974-8a34-4d0b-9b8a-745f78bc4c1b","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"489a3322-da84-46d7-b81a-8a70b053607b","type":"GlyphRenderer"},{"attributes":{},"id":"01ec363d-3a8e-4207-882b-7c13a842a2e8","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"37fd48ea-8c68-4736-9276-a63ea2d478fc","type":"BasicTickFormatter"},"plot":{"id":"ef4abad0-fbe2-4ace-a5b5-8d7c0eedc4a9","type":"Plot"},"ticker":{"id":"a2d58cd4-b564-4f8a-977c-5c80a476d553","type":"BasicTicker"}},"id":"5dca925d-ca7d-4a29-a0d3-a4db94afc573","type":"LinearAxis"},{"attributes":{},"id":"9427ea17-15e9-4584-a493-4843703b7a01","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b6e798cc-5688-40bf-afa1-6914a1479dfe","type":"ColumnDataSource"},"glyph":{"id":"b50184db-5049-4a45-bb24-d3fa4bd80042","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b6201a43-7ff9-49ad-bcca-cf751a91703d","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"039b7ec1-66fb-46a3-ac4f-56f7fed176a4","type":"Plot"},{"id":"e63046e4-b176-4db1-93ff-f72b484c4de2","type":"Plot"}]},"id":"74ec6f81-71ce-42fb-8381-12b553965a21","type":"Row"},{"attributes":{"data_source":{"id":"db4f6230-6555-49de-987d-cb1088d97dc0","type":"ColumnDataSource"},"glyph":{"id":"7494b52b-22b8-4177-9a7a-e2c3ee1120cb","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ec5b6c9a-9311-4a12-bd3d-21afba02df87","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"e63046e4-b176-4db1-93ff-f72b484c4de2","type":"Plot"},"ticker":{"id":"bd557351-ac14-4bde-86d4-843e3efda695","type":"BasicTicker"}},"id":"e0ff7156-b5fb-47e9-bdcb-782c6c748346","type":"Grid"},{"attributes":{},"id":"5d07f3de-03a4-408c-ac84-2e65779f58e6","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"da10bd08-98a3-4ef8-983c-4a73d8b52953","type":"BasicTickFormatter"},"plot":{"id":"e63046e4-b176-4db1-93ff-f72b484c4de2","type":"Plot"},"ticker":{"id":"bd557351-ac14-4bde-86d4-843e3efda695","type":"BasicTicker"}},"id":"f293fa7d-ab43-4061-9e73-ae8ceeeb2a65","type":"LinearAxis"}],"root_ids":["b2540675-7b95-418c-94d4-0990e57c6635"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"27a3ceb0-2068-4e61-bc64-2cb731868f31","elementid":"d3ebe00e-f549-45ca-993b-a06080577f68","modelid":"b2540675-7b95-418c-94d4-0990e57c6635"}];
              
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
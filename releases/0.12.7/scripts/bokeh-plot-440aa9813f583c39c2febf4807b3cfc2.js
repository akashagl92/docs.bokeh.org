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
      };var element = document.getElementById("6d05b8e7-badb-4d0b-a069-a93fe004c8fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d05b8e7-badb-4d0b-a069-a93fe004c8fe' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"38eeab69-dd32-4ec6-a336-e2def0ebd547":{"roots":{"references":[{"attributes":{},"id":"41cc8b59-b7bf-44f7-8c2d-ca850b3ea2f2","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"0a0c3aaa-9a96-4341-8b9a-f326b254354e","subtype":"Figure","type":"Plot"},"ticker":{"id":"72fe879a-d61f-4242-be2d-baa59552112e","type":"BasicTicker"}},"id":"da725b26-49b5-4110-953b-a04943c96ed7","type":"Grid"},{"attributes":{},"id":"12b3e348-4860-43af-a94d-c18aa1c4bf8a","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"788e446a-9b3e-4ec5-9707-1b5092b31707","type":"ColumnDataSource"},"glyph":{"id":"7465609e-1adc-4038-bc2f-2697cd042221","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"75eca150-2e90-4742-a7d1-70be5e571e6b","type":"Circle"},"selection_glyph":null,"view":{"id":"5dbb517b-7d5e-41ce-921c-1f8f94a65d7b","type":"CDSView"}},"id":"d5e0f0f6-348e-4ec8-8a2a-07f8d5248e49","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"aaa1041d-c685-4738-914c-fcd206ceb09e","type":"Circle"},{"attributes":{"source":{"id":"d857a7b8-c88b-4216-8e52-52aeed80b62b","type":"ColumnDataSource"}},"id":"5805ed6a-b9ce-46c4-bfeb-ba23748f1b15","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}}},"id":"d9379c0c-b95f-4968-81e7-06dd0fc108f2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"34beb009-4153-4f1c-955b-e20a1e55f9be","type":"ColumnDataSource"}},"id":"d735241d-1941-4311-9e4a-ff7ef41f7d91","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}}},"id":"6bdc6466-4801-4a45-a291-96e36aa983c1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d857a7b8-c88b-4216-8e52-52aeed80b62b","type":"ColumnDataSource"},"glyph":{"id":"d45d76af-69c3-41e4-88f8-df12768eda37","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"05ac4fe6-eae1-4772-a604-559cc9403aa0","type":"Circle"},"selection_glyph":null,"view":{"id":"5805ed6a-b9ce-46c4-bfeb-ba23748f1b15","type":"CDSView"}},"id":"b2d71902-4f58-4786-921f-892db71d6d6c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d63948b1-5d2c-44f1-a4a3-8c8a2b6d8f8a","type":"ColumnDataSource"},"glyph":{"id":"7dd20a28-a928-45be-aad1-f30351044080","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1173d695-7e1f-4c94-b001-700c94d0139e","type":"Circle"},"selection_glyph":null,"view":{"id":"695d2eee-ae42-4c8d-be79-01624b3df2c6","type":"CDSView"}},"id":"3500d26f-72ca-4909-841a-5d8073a824fb","type":"GlyphRenderer"},{"attributes":{"source":{"id":"788e446a-9b3e-4ec5-9707-1b5092b31707","type":"ColumnDataSource"}},"id":"5dbb517b-7d5e-41ce-921c-1f8f94a65d7b","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}}},"id":"aefdecb6-5f72-4049-b36c-05765e1c7b1f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6bdc6466-4801-4a45-a291-96e36aa983c1","type":"ColumnDataSource"},"glyph":{"id":"aaa1041d-c685-4738-914c-fcd206ceb09e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bf75124d-d6b9-449b-9975-1bd00ebaddba","type":"Circle"},"selection_glyph":null,"view":{"id":"11974362-1240-47b8-b194-52d78f69898c","type":"CDSView"}},"id":"c2bcbafc-fb60-4c48-b957-72d51a64d2c9","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b0b99a03-2c38-4e33-9b41-03f99921787e","type":"ColumnDataSource"}},"id":"a27c1e82-451f-432c-8509-203eba6b8250","type":"CDSView"},{"attributes":{"data_source":{"id":"aefdecb6-5f72-4049-b36c-05765e1c7b1f","type":"ColumnDataSource"},"glyph":{"id":"23ff7e37-65c5-4f2a-bef9-f6d90ddf0632","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"345f7608-2b60-4f37-97a1-388c8d68289f","type":"Circle"},"selection_glyph":null,"view":{"id":"3a6b5dec-43bf-4fbd-8bd0-81bd99bd1ed2","type":"CDSView"}},"id":"81967f5e-84e9-4bea-aa68-3ea8448a4f65","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"e6539dcf-67f2-49ab-89cc-df17e10971e6","type":"Circle"},{"attributes":{"formatter":{"id":"c7ab1586-e67d-4671-b813-fcc2d1cf3712","type":"BasicTickFormatter"},"plot":{"id":"0a0c3aaa-9a96-4341-8b9a-f326b254354e","subtype":"Figure","type":"Plot"},"ticker":{"id":"72fe879a-d61f-4242-be2d-baa59552112e","type":"BasicTicker"}},"id":"be2857d6-9fc8-4be9-8991-1649aea5ef9b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"de96e687-1acd-4143-9d33-cdc9fc58c843","type":"ColumnDataSource"},"glyph":{"id":"66c92c37-57de-4fcf-bc37-af22e0d98a99","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a203659-986d-4fd3-b2fa-e6d1318875c7","type":"Circle"},"selection_glyph":null,"view":{"id":"9b6771b5-e941-4458-a1c6-a469546659c8","type":"CDSView"}},"id":"9ab6660d-f961-49a6-871f-1919e34619b5","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"7dd20a28-a928-45be-aad1-f30351044080","type":"Circle"},{"attributes":{},"id":"a48fc0d0-1175-4f64-9102-034112c70f93","type":"LinearScale"},{"attributes":{"overlay":{"id":"719fc060-4993-4adc-b043-e96effab2398","type":"BoxAnnotation"}},"id":"bc2e33b9-2b6b-45c7-8a57-b6e36d53f557","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"1173d695-7e1f-4c94-b001-700c94d0139e","type":"Circle"},{"attributes":{"plot":{"id":"0a0c3aaa-9a96-4341-8b9a-f326b254354e","subtype":"Figure","type":"Plot"},"ticker":{"id":"30bbffd3-08f3-4b13-93b9-78da922d9c1a","type":"BasicTicker"}},"id":"a9c4f898-0c43-4684-86cf-2b229adb7a7a","type":"Grid"},{"attributes":{},"id":"71362586-05ca-426e-94f0-5f6382451643","type":"ResetTool"},{"attributes":{"source":{"id":"48564bd8-adf5-4f56-b327-eec17fecf41b","type":"ColumnDataSource"}},"id":"67a01fc6-1f6c-4966-bdbd-6f8eb2731a32","type":"CDSView"},{"attributes":{"source":{"id":"aefdecb6-5f72-4049-b36c-05765e1c7b1f","type":"ColumnDataSource"}},"id":"3a6b5dec-43bf-4fbd-8bd0-81bd99bd1ed2","type":"CDSView"},{"attributes":{},"id":"f00197f9-7f79-4b03-b9f3-808599241e46","type":"BasicTickFormatter"},{"attributes":{},"id":"c7ab1586-e67d-4671-b813-fcc2d1cf3712","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}}},"id":"d63948b1-5d2c-44f1-a4a3-8c8a2b6d8f8a","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6bdc6466-4801-4a45-a291-96e36aa983c1","type":"ColumnDataSource"}},"id":"11974362-1240-47b8-b194-52d78f69898c","type":"CDSView"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"9fe5f831-5747-4851-b731-e8161bc99a05","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"7465609e-1adc-4038-bc2f-2697cd042221","type":"Circle"},{"attributes":{"source":{"id":"73bcb254-78aa-440e-a891-3c2fff657437","type":"ColumnDataSource"}},"id":"2864dfd6-ff9c-4456-883a-9a39f3763351","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}}},"id":"788e446a-9b3e-4ec5-9707-1b5092b31707","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"20e759bf-8fb8-4617-9331-c66743af08fb","type":"ColumnDataSource"},"glyph":{"id":"c1127443-4ec4-4f30-9a0f-65d004f09b41","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7ef3ecd9-1f5b-4c05-8e1a-26d0cba1ae26","type":"Circle"},"selection_glyph":null,"view":{"id":"07b6da5d-8ab2-4602-8c38-7f901c560930","type":"CDSView"}},"id":"14d1082b-3820-4b52-a9bc-b919590ec627","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"40f3342d-e7ba-4890-b74d-32adba12f786","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"719fc060-4993-4adc-b043-e96effab2398","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}}},"id":"b0b99a03-2c38-4e33-9b41-03f99921787e","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"0fd434c1-f1b6-4220-9b6b-2283070ae27c","type":"LinearAxis"}],"left":[{"id":"be2857d6-9fc8-4be9-8991-1649aea5ef9b","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"0fd434c1-f1b6-4220-9b6b-2283070ae27c","type":"LinearAxis"},{"id":"a9c4f898-0c43-4684-86cf-2b229adb7a7a","type":"Grid"},{"id":"be2857d6-9fc8-4be9-8991-1649aea5ef9b","type":"LinearAxis"},{"id":"da725b26-49b5-4110-953b-a04943c96ed7","type":"Grid"},{"id":"719fc060-4993-4adc-b043-e96effab2398","type":"BoxAnnotation"},{"id":"e5bb4624-bfab-453f-9254-48ae81fb47c3","type":"Whisker"},{"id":"2651960e-e07d-4641-b01c-dd9789865d42","type":"GlyphRenderer"},{"id":"654db122-b100-440a-8e3e-5f3d778a9838","type":"GlyphRenderer"},{"id":"9b6c9090-cb67-42bf-8358-ffb203d51d6c","type":"GlyphRenderer"},{"id":"14d1082b-3820-4b52-a9bc-b919590ec627","type":"GlyphRenderer"},{"id":"f7076fd9-0e2c-4baa-a9c6-5afdc40c4180","type":"GlyphRenderer"},{"id":"d5e0f0f6-348e-4ec8-8a2a-07f8d5248e49","type":"GlyphRenderer"},{"id":"3500d26f-72ca-4909-841a-5d8073a824fb","type":"GlyphRenderer"},{"id":"b2d71902-4f58-4786-921f-892db71d6d6c","type":"GlyphRenderer"},{"id":"81967f5e-84e9-4bea-aa68-3ea8448a4f65","type":"GlyphRenderer"},{"id":"c2bcbafc-fb60-4c48-b957-72d51a64d2c9","type":"GlyphRenderer"},{"id":"9ab6660d-f961-49a6-871f-1919e34619b5","type":"GlyphRenderer"},{"id":"b2f4d255-dd86-43ab-b5a9-912fca82ebb9","type":"GlyphRenderer"},{"id":"8f33fef5-7998-4e7e-b61a-860824c6efe8","type":"GlyphRenderer"}],"title":{"id":"bf2a7071-e4aa-477f-8659-7e45fa6248fc","type":"Title"},"toolbar":{"id":"63461360-a379-452f-bb24-b345772eb478","type":"Toolbar"},"x_range":{"id":"eafadcf9-1b21-4e1b-89fe-693dcfa3cf7b","type":"DataRange1d"},"x_scale":{"id":"402f17ca-dc2c-4007-b97f-dc98a2ac9177","type":"LinearScale"},"y_range":{"id":"df4a1c03-21d4-4111-9f63-ba8a65e8fd9d","type":"DataRange1d"},"y_scale":{"id":"a48fc0d0-1175-4f64-9102-034112c70f93","type":"LinearScale"}},"id":"0a0c3aaa-9a96-4341-8b9a-f326b254354e","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"34beb009-4153-4f1c-955b-e20a1e55f9be","type":"ColumnDataSource"},"glyph":{"id":"d0f82f78-b7e9-4b42-9480-d2372a3e841a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a111ad9-7f1f-48ef-a30d-84c38656e6ef","type":"Circle"},"selection_glyph":null,"view":{"id":"d735241d-1941-4311-9e4a-ff7ef41f7d91","type":"CDSView"}},"id":"f7076fd9-0e2c-4baa-a9c6-5afdc40c4180","type":"GlyphRenderer"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"53dd0f8d-2534-4193-8488-3d5579587d65","type":"TeeHead"},{"attributes":{"source":{"id":"de96e687-1acd-4143-9d33-cdc9fc58c843","type":"ColumnDataSource"}},"id":"9b6771b5-e941-4458-a1c6-a469546659c8","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"cefa779c-e370-4be7-827b-7de28e6492f4","type":"Circle"},{"attributes":{},"id":"402f17ca-dc2c-4007-b97f-dc98a2ac9177","type":"LinearScale"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"bf2a7071-e4aa-477f-8659-7e45fa6248fc","type":"Title"},{"attributes":{"data_source":{"id":"d9379c0c-b95f-4968-81e7-06dd0fc108f2","type":"ColumnDataSource"},"glyph":{"id":"9fe5f831-5747-4851-b731-e8161bc99a05","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40f3342d-e7ba-4890-b74d-32adba12f786","type":"Circle"},"selection_glyph":null,"view":{"id":"96c19cf1-5fb1-485a-a245-3dfdf927030f","type":"CDSView"}},"id":"b2f4d255-dd86-43ab-b5a9-912fca82ebb9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}}},"id":"48564bd8-adf5-4f56-b327-eec17fecf41b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"bf75124d-d6b9-449b-9975-1bd00ebaddba","type":"Circle"},{"attributes":{"callback":null},"id":"df4a1c03-21d4-4111-9f63-ba8a65e8fd9d","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"4167fa24-8244-451c-b92a-7cdf4a86cb95","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"23ff7e37-65c5-4f2a-bef9-f6d90ddf0632","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"66c92c37-57de-4fcf-bc37-af22e0d98a99","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"c1127443-4ec4-4f30-9a0f-65d004f09b41","type":"Circle"},{"attributes":{"data_source":{"id":"48564bd8-adf5-4f56-b327-eec17fecf41b","type":"ColumnDataSource"},"glyph":{"id":"e6539dcf-67f2-49ab-89cc-df17e10971e6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cefa779c-e370-4be7-827b-7de28e6492f4","type":"Circle"},"selection_glyph":null,"view":{"id":"67a01fc6-1f6c-4966-bdbd-6f8eb2731a32","type":"CDSView"}},"id":"2651960e-e07d-4641-b01c-dd9789865d42","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"41cc8b59-b7bf-44f7-8c2d-ca850b3ea2f2","type":"PanTool"},{"id":"12b3e348-4860-43af-a94d-c18aa1c4bf8a","type":"WheelZoomTool"},{"id":"bc2e33b9-2b6b-45c7-8a57-b6e36d53f557","type":"BoxZoomTool"},{"id":"9df34270-17fe-4e4a-8f40-518ef43d8e60","type":"SaveTool"},{"id":"71362586-05ca-426e-94f0-5f6382451643","type":"ResetTool"},{"id":"a25fc1e9-43c1-4ad5-9fe2-7db904517d8c","type":"HelpTool"}]},"id":"63461360-a379-452f-bb24-b345772eb478","type":"Toolbar"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"c5fdc6dd-5cec-437b-8296-78add79d2e61","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"cdb8ae33-4e6d-4ebe-bf0c-6efba43c66a8","type":"Circle"},{"attributes":{},"id":"9df34270-17fe-4e4a-8f40-518ef43d8e60","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"b9bc2b02-bfba-4db9-a807-5842b71d1992","type":"Circle"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"cbdbf8e6-aff8-4a72-9ae0-e6b888da0a75","type":"TeeHead"},"plot":{"id":"0a0c3aaa-9a96-4341-8b9a-f326b254354e","subtype":"Figure","type":"Plot"},"source":{"id":"4431d43b-0112-4caf-8863-5c6cdbbc2641","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"53dd0f8d-2534-4193-8488-3d5579587d65","type":"TeeHead"}},"id":"e5bb4624-bfab-453f-9254-48ae81fb47c3","type":"Whisker"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"d56e178e-81f0-457f-82aa-0ac99fe45f89","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"05ac4fe6-eae1-4772-a604-559cc9403aa0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"345f7608-2b60-4f37-97a1-388c8d68289f","type":"Circle"},{"attributes":{"data_source":{"id":"73bcb254-78aa-440e-a891-3c2fff657437","type":"ColumnDataSource"},"glyph":{"id":"d56e178e-81f0-457f-82aa-0ac99fe45f89","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cdb8ae33-4e6d-4ebe-bf0c-6efba43c66a8","type":"Circle"},"selection_glyph":null,"view":{"id":"2864dfd6-ff9c-4456-883a-9a39f3763351","type":"CDSView"}},"id":"654db122-b100-440a-8e3e-5f3d778a9838","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d63948b1-5d2c-44f1-a4a3-8c8a2b6d8f8a","type":"ColumnDataSource"}},"id":"695d2eee-ae42-4c8d-be79-01624b3df2c6","type":"CDSView"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"cbdbf8e6-aff8-4a72-9ae0-e6b888da0a75","type":"TeeHead"},{"attributes":{"formatter":{"id":"f00197f9-7f79-4b03-b9f3-808599241e46","type":"BasicTickFormatter"},"plot":{"id":"0a0c3aaa-9a96-4341-8b9a-f326b254354e","subtype":"Figure","type":"Plot"},"ticker":{"id":"30bbffd3-08f3-4b13-93b9-78da922d9c1a","type":"BasicTicker"}},"id":"0fd434c1-f1b6-4220-9b6b-2283070ae27c","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"2a203659-986d-4fd3-b2fa-e6d1318875c7","type":"Circle"},{"attributes":{"source":{"id":"700f105b-ebde-4a43-8130-db36efdadfb4","type":"ColumnDataSource"}},"id":"298b02c5-5822-4d36-9884-af1b5acf7ad6","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}}},"id":"73bcb254-78aa-440e-a891-3c2fff657437","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"7ef3ecd9-1f5b-4c05-8e1a-26d0cba1ae26","type":"Circle"},{"attributes":{"data_source":{"id":"700f105b-ebde-4a43-8130-db36efdadfb4","type":"ColumnDataSource"},"glyph":{"id":"4167fa24-8244-451c-b92a-7cdf4a86cb95","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9bc2b02-bfba-4db9-a807-5842b71d1992","type":"Circle"},"selection_glyph":null,"view":{"id":"298b02c5-5822-4d36-9884-af1b5acf7ad6","type":"CDSView"}},"id":"9b6c9090-cb67-42bf-8358-ffb203d51d6c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"75eca150-2e90-4742-a7d1-70be5e571e6b","type":"Circle"},{"attributes":{"callback":null,"column_names":["base","lower","upper"],"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]}},"id":"4431d43b-0112-4caf-8863-5c6cdbbc2641","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"2a111ad9-7f1f-48ef-a30d-84c38656e6ef","type":"Circle"},{"attributes":{"source":{"id":"20e759bf-8fb8-4617-9331-c66743af08fb","type":"ColumnDataSource"}},"id":"07b6da5d-8ab2-4602-8c38-7f901c560930","type":"CDSView"},{"attributes":{},"id":"72fe879a-d61f-4242-be2d-baa59552112e","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"aba05fba-ae32-4986-af2f-e72062c14732","type":"Circle"},{"attributes":{"callback":null},"id":"eafadcf9-1b21-4e1b-89fe-693dcfa3cf7b","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}}},"id":"700f105b-ebde-4a43-8130-db36efdadfb4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}}},"id":"34beb009-4153-4f1c-955b-e20a1e55f9be","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}}},"id":"d857a7b8-c88b-4216-8e52-52aeed80b62b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}}},"id":"de96e687-1acd-4143-9d33-cdc9fc58c843","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"d0f82f78-b7e9-4b42-9480-d2372a3e841a","type":"Circle"},{"attributes":{"data_source":{"id":"b0b99a03-2c38-4e33-9b41-03f99921787e","type":"ColumnDataSource"},"glyph":{"id":"c5fdc6dd-5cec-437b-8296-78add79d2e61","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aba05fba-ae32-4986-af2f-e72062c14732","type":"Circle"},"selection_glyph":null,"view":{"id":"a27c1e82-451f-432c-8509-203eba6b8250","type":"CDSView"}},"id":"8f33fef5-7998-4e7e-b61a-860824c6efe8","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"d45d76af-69c3-41e4-88f8-df12768eda37","type":"Circle"},{"attributes":{},"id":"30bbffd3-08f3-4b13-93b9-78da922d9c1a","type":"BasicTicker"},{"attributes":{"source":{"id":"d9379c0c-b95f-4968-81e7-06dd0fc108f2","type":"ColumnDataSource"}},"id":"96c19cf1-5fb1-485a-a245-3dfdf927030f","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y"],"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}}},"id":"20e759bf-8fb8-4617-9331-c66743af08fb","type":"ColumnDataSource"},{"attributes":{},"id":"a25fc1e9-43c1-4ad5-9fe2-7db904517d8c","type":"HelpTool"}],"root_ids":["0a0c3aaa-9a96-4341-8b9a-f326b254354e"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"38eeab69-dd32-4ec6-a336-e2def0ebd547","elementid":"6d05b8e7-badb-4d0b-a069-a93fe004c8fe","modelid":"0a0c3aaa-9a96-4341-8b9a-f326b254354e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
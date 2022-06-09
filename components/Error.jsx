const Error = ({ message = '' }) => (
    <div class="flex items-center mx-[auto] rounded text-error-seos text-sm font-bold px-4 py-3" role="alert">
        <p> { message }  </p>
    </div>
)

export default Error